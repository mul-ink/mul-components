const render = async (html) => {
  await page.goto('http://localhost:8080/mul-app');
  await page.setContent(html);
};

describe('<mul-app>', () => {
  it('renders Mul app text inside', async () => {
    await render('<mul-app></mul-app>');
    const element = await page.$('mulApp');
    const text = await page.evaluate(
      (el) => el.shadowRoot?.textContent,
      element,
    );
    expect(text).toStrictEqual(expect.stringContaining('Mul app'));
  });
});