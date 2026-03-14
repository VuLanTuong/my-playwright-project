# Run with browser UI visible
npx playwright test --headed

# Run a specific file
npx playwright test tests/login.spec.ts

# Run tests matching a name
npx playwright test --grep "login"

# Run in a specific browser
npx playwright test --project=chromium

# Run in interactive UI mode (great for debugging)
npx playwright test --ui

# Debug a specific test (step through with DevTools)
npx playwright test --debug

# Run last failed tests only
npx playwright test --last-failed
```

# Test case = fx(Arrange, Act, Assert)

* answer 3 questions:
   * 1. tagname (E): input
   * 2. attributes(name-> A, value -> t ) 
   *      name=username, id=username, type=text
   * 3. text?
   * n/a
   * 
   * Css selector: E[A=t] or [A=t] if A=id => E#t or #t, if A=class => E.t or .t
