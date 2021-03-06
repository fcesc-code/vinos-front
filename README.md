# Vinos

## Purpose
The aim of this exercise is to build a small wine app, as part of a University 
[Web apps and sites development Master](https://estudis.uoc.edu/ca/masters-universitaris/desenvolupament-llocs-aplicacions-web/presentacio) 
by [Universitat Oberta de Catalunya](http://uoc.edu). \
Subject: Front-end with frameworks JS I. April 2021.

## Repo
A Git repository can be found at https://github.com/fcesc-code/vinos-front.git
The backend counterpart can be found at https://github.com/fcesc-code/vinos-back.git

## Tech stack
- [Angular](https://angular.io/) framework
- [Angular CLI](https://angular.io/cli)
- [RxJS](https://rxjs.dev/guide/overview) library for reactive programming with Angular
- [Typescript](https://www.typescriptlang.org/)
- [Jasmine](https://jasmine.github.io/) test framework
- [Karma](https://karma-runner.github.io/) test runner
- [Protractor](https://www.protractortest.org/#/) e2e testing in Angular
- [sass](https://sass-lang.com/)
- [GitHub](https://github.com/)
- [GitHub Actions](https://github.com/features/actions) for automated testing in continuous delivery
- [GitHub native Dependabot](https://dependabot.com/) for security alerts
- [GitHub codeQL](https://github.com/github/codeql) for code scanning alerts
- [sonarqube](https://www.sonarqube.org/)
- [VSCode](https://code.visualstudio.com/)
- [WSL](https://docs.microsoft.com/en-us/windows/wsl/about) Windows Subsystem for Linux (ubuntu 20)
- [HTML](https://html.spec.whatwg.org/)
- [YAML](https://yaml.org/) for GitHub actions
- Paradigms: Object-Oriented, Reactive

## Quality gate
- [HTML Validator](https://jigsaw.w3.org/css-validator/): 0 errors | 0 warnings \
- [CSS Validator](https://jigsaw.w3.org/css-validator/validator): 0 errors | 0 warnings \
- [Karma](https://karma-runner.github.io/): 17/17 tests passed (branch not merged) \
- [Sonarqube](https://www.sonarqube.org/): 0 bugs | 0 code smells | 0 vulnerabilities | 2 security hotspots | 0% code duplication (excluding duplicated API file requested to separate deliverables) \

## Continuous delivery
Automated testing in every pull request or merge to the main branch.
Automated code scanning to measure code quality, pull requests cannot be merged if quality is not met.
Automated security alerts for the repository.

## Development server
Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.
Alternatively, run npm start.

## Build
Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the -prod flag for a production build.

## Running unit tests
Run ng test to execute the unit tests via Karma.
Option npm run testAuto is given for GitHub Actions.

## Running end-to-end tests
Run ng e2e to execute the end-to-end tests via Protractor. Before running the tests make sure you are serving the app via ng serve.

## Next steps
1. Implement continuous deployment.
2. Refactor main page structure.
3. Add routing functionality.

## Releases
v0.1.0 Planned - September 2021

## Security
Read the [security policy](https://github.com/fcesc-code/vinos-front/blob/main/SECURITY.md) for this project.

## Credits
Assistant professor [Carlos Caballero](https://www.carloscaballero.io/about/)

## Author
Francesc Brugarolas, [VanillaJS repo](https://github.com/fcesc-code/vanillaJS)\
\
April 2021
\
Latest update: August 2021.
