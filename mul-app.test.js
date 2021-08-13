const render = async (html) => {
  await page.goto('http://localhost:8080/mul-app');
  await page.setContent(html);
};

describe('Credit card form', () => {
  it('renders Test app', async () => {
    await render('<mul-app></mul-app>');
    const element = await page.$('mul-app');
    const text = await page.evaluate(
      (el) => el.shadowRoot?.textContent,
      element,
    );
    expect(text).toStrictEqual(expect.stringContaining('Test app'));
  });
});