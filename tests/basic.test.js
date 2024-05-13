import { Selector } from 'testcafe';

// prettier-ignore
fixture `Getting started with TestCafe`
    .page `https://devexpress.github.io/testcafe/example/`
    .before(async t =>{
        //test setup gose here
        //await runDatabaseReset()
        //await seedTestDat()
    })
    .beforeEach(async t => {
        await t.setTestSpeed(0.1)
    })
    .after(async t => {
        //cleaning test data
        //Logging and sending data to monitoring systems
    })
    .afterEach(async t => {
        //Runs after each test
    })

test('My first testcafe', async t => {
    await t.typeText('#developer-name', 'David')
    await t.click('#submit-button')

    await t.expect(Selector('#article-header').innerText).contains('David')
})

