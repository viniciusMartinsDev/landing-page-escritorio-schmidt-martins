# Core Principles

## I. Code Quality Is Non-Negotiable

All production code MUST use explicit typing, clear naming, and small focused
functions. Pull requests MUST avoid duplicated logic and MUST include error
messages that state both offending values and expected shape when validation
fails. Rationale: maintainable code reduces operational risk and speeds up safe
delivery.

## II. Tests Define Done

Every new behavior MUST include automated tests, and every bug fix MUST include
a regression test that fails before the fix and passes after it. Test suites
MUST remain fast, isolated, and repeatable, with external I/O replaced by named
fakes. Rationale: test evidence is the only reliable proof that behavior is
stable across changes.

## III. Code style

- Functions: 4-20 lines. Split if longer.
- Files: under 500 lines. Split by responsibility.
- One thing per function, one responsibility per module (SRP).
- Names: specific and unique. Avoid `data`, `handler`, `Manager`. Prefer names
  that return <5 grep hits in the codebase.
- Types: explicit. No `any`, no `Dict`, no untyped functions.
- No code duplication. Extract shared logic into a function/module.
- Early returns over nested ifs. Max 2 levels of indentation.
- Exception messages must include the offending value and expected shape.

## IV. Comments

- Keep your own comments. Don't strip them on refactor — they carry intent and
  provenance.
- Write WHY, not WHAT. Skip `// increment counter` above `i++`.
- Docstrings on public functions: intent + one usage example.
- Reference issue numbers / commit SHAs when a line exists because of a specific
  bug or upstream constraint.

## V. Tests

- Tests run with a single command: `<project-specific>`.
- Every new function gets a test. Bug fixes get a regression test.
- Mock external I/O (API, DB, filesystem) with named fake classes, not inline
  stubs.
- Tests must be F.I.R.S.T: fast, independent, repeatable, self-validating,
  timely.

## VI. Dependencies

- Inject dependencies through constructor/parameter, not global/import.
- Wrap third-party libs behind a thin interface owned by this project.

## VII. Structure

- Follow the framework's convention (fastify).
- Prefer small focused modules over god files.
- Predictable paths: controller/model/view, src/lib/test, etc.
- DRY (Don't Repeat Yourself) but not at the cost of readability. Avoid
  over-abstraction.

## VIII. Formatting

- Use the language default formatter `prettier`. Don't discuss style beyond
  that.

## IX. Logging

- Structured JSON when logging for debugging / observability.
- Plain text only for user-facing CLI output.
- Include context (request ID, user ID) in logs when available.
