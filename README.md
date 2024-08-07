
# Testing in Augular with Jasmine and Karma

> [!NOTE]

- In angular, the test file has extention with .spec.ts
- Jasmine used Karma to run the test
- describe(""): This function is used to define a test suite. The string parameter passed to describe is a description of the test suite, usually indicating what is being tested.
- it(): is a function to define specification. Inside the describe block, you use it() to define individual test cases. Each it() block should contain a single test scenario.
- Callback Function: The second parameter is a callback function containing the actual test logic. This function typically includes calls to it(), which define individual test specs within the test suite.
- syntax:

    ```js
    describe("ServiceName", () => {
        it("description", () => {
            
        })
    })
    ```

