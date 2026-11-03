import fs from 'node:fs';
import { parseHTML } from 'linkedom';
import assert from 'node:assert/strict';

const data = JSON.parse(fs.readFileSync('src/data/november-pages.json', 'utf8'));
const aliases = new Set(['/services/emergency-dentistry/', '/services/clear-braces/']);
const groups = ['services', 'concerns', 'patientPages', 'aboutContact', 'doctorsTeamPages'];
const normalized = value => value.replace(/\s+/g, ' ').trim();
const issues = [], routes = [];
let copyChecks = 0, schemaChecks = 0;
for (const group of groups) {
  for (const [route, page] of Object.entries(data[group])) {
    if (!route.startsWith('/') || aliases.has(route)) continue;
    try {
      const doc = parseHTML(fs.readFileSync(`dist${route}index.html`, 'utf8')).document;
      const main = doc.querySelector('main');
      const text = normalized(main.textContent);
      assert.equal(doc.querySelectorAll('main h1').length, 1, 'one H1');
      assert.equal(doc.querySelector('h1').textContent, page.h1, 'H1 matches supplied content');
      assert.equal(doc.title, page.seoTitle, 'unique page title');
      assert.equal(doc.querySelector('meta[name="description"]').getAttribute('content'), page.metaDesc, 'page description');
      assert.equal(doc.querySelector('link[rel="canonical"]').getAttribute('href'), 'https://cosmeticimplantdentistrywp.com' + route, 'canonical');
      const strings = [page.lede, page.answer, ...((page.facts || []).flat()), ...((page.included || []).flatMap(item => item.slice(0, 2))), ...((page.steps || []).flat()), ...((page.faq || []).flat())].filter(Boolean);
      for (const expected of strings) { assert.ok(text.includes(normalized(expected)), 'missing copy: ' + expected); copyChecks++; }
      assert.ok(!text.includes('Medically reviewed'), 'no unverified medical review assertion');
      assert.ok(!/free private parking/i.test(text), 'no unverified parking cost');
      assert.ok(!text.includes('5.0 on Google'), 'no hardcoded aggregate');
      const schema = [...doc.querySelectorAll('script[type="application/ld+json"]')].map(script => JSON.parse(script.textContent)).flatMap(item => item['@graph'] || [item]);
      const types = schema.map(item => item['@type']);
      assert.ok(types.includes('Dentist') && types.includes('BreadcrumbList'), 'practice and breadcrumb schema');
      if (group === 'services') assert.ok(types.includes(page.procType || 'MedicalProcedure'));
      if (group === 'concerns') { assert.ok(types.includes('MedicalCondition')); assert.equal(doc.querySelectorAll('tbody tr').length, page.compare.rows.length); }
      if (page.faq?.length) {
        const faq = schema.find(item => item['@type'] === 'FAQPage');
        assert.equal(faq.mainEntity.length, page.faq.length);
        faq.mainEntity.forEach(item => assert.ok(text.includes(normalized(item.acceptedAnswer.text))));
      }
      if (page.kind === 'special') assert.equal(schema.find(item => item['@type'] === 'Offer').price, 99);
      if (page.kind === 'club') assert.equal(schema.find(item => item['@type'] === 'OfferCatalog').itemListElement.length, 3);
      if (page.kind === 'docs') assert.equal(types.filter(type => type === 'Person').length, 4);
      if (page.kind === 'team') assert.equal(doc.querySelectorAll('.all-team-grid article').length, 9);
      if (page.kind === 'club') assert.ok(doc.querySelector('a[href="https://smileclub.cosmeticimplantdentistrywp.com/#getintouch"]'));
      assert.ok(doc.querySelector('a[href="https://onlineappointment.carestack.com/?dn=acts&ln=1"]'), 'booking retained');
      assert.ok(doc.querySelector('a[href="tel:+18163880985"]'), 'telephone retained');
      schemaChecks += schema.length;
      routes.push({ route, template: page.kind || (group === 'services' ? 'service' : 'concern'), result: 'passed' });
    } catch (error) { issues.push({ route, error: error.message }); }
  }
}
const sitemap = fs.readFileSync('dist/sitemap-0.xml', 'utf8');
for (const { route } of routes) if (!sitemap.includes('https://cosmeticimplantdentistrywp.com' + route)) issues.push({ route, error: 'Missing sitemap URL' });
for (const route of ['/design-review/', '/migration-review/', '/404/']) if (sitemap.includes('https://cosmeticimplantdentistrywp.com' + route)) issues.push({ route, error: 'Private/review page in sitemap' });
assert.ok(fs.existsSync('dist/404.html'));
assert.ok(fs.readFileSync('dist/robots.txt', 'utf8').includes('sitemap-index.xml'));
const report = { date: new Date().toISOString(), pageCount: routes.length, copyChecks, schemaChecks, routes, issues };
fs.mkdirSync('docs/verification/november-pages', { recursive: true });
fs.writeFileSync('docs/verification/november-pages/route-checks.json', JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ pageCount: routes.length, copyChecks, schemaChecks, issues }, null, 2));
if (issues.length) process.exitCode = 1;
