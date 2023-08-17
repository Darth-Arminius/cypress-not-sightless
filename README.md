# Cypress not Sightless: Visually testing your web apps -- companion workshop example app

This is the example app that is used for the "Cypress not Sightless" talk but can also be used without attending the talk. You can also use the recording of the talk as a walkthrough for using the app. You can find the [slide deck here](https://docs.google.com/presentation/d/1vpvKTwLu8-IqOmCYD77rNZs_TiGApy04-pS8G2tNXRw/edit?usp=sharing).

The app is based off of the [Next News](https://vercel.com/templates/next.js/next-news) template with minor adjustments for the sake of the workshop.

## How to

Start by `forking` the repo, make sure you have the latest version, and then run `npm install`. After the install completes, run `npm run dev` and go to `localhost:3000` to make sure everything is running correctly. You should see a Hacker News home screen with the title "Hacker Next". You can have a little playaround but its essentially a barebones version of the Hacker News site.

### Tags

This repo utilises Git tags to Stage specific points in the workshop history. You can checkout each Stage and see the additions and changes to the code since the previous Stage. During the talk, I use these Stages as a sort of Blue Peter "here's one I made earlier" for the sake of time, but it also acts as challenge/task points for those working through the workshop, i.e. Stage 1 is just the example app without Cypress implemented, so the first challenge would be to try and implement Cypress yourself, before then moving onto Stage 2 which is to write the first E2E test, and so on.

To checkout a stage simply run `git checkout stage-[NUMBER]`, e.g. `git checkout stage-1`

The tags are as follows:

- stage-1 -- Basic, ready-to-go example app with no Cypress implementation
- stage-2 -- Cypress implemented for E2E, ready to start writing E2E tests
- stage-3 -- Initial basic E2E test written, ready for advanced Cypress usage
- stage-4 -- Advanced E2E test written, ready to implement Cypress Component Testing
- stage-5 -- Cypress Component Testing setup, ready for first Component Test
- stage-6 -- Component test written, ready for Cucumber BDD integration
- stage-7 -- Cucumber BDD integrated, ready for refactoring E2E tests to use Cucumber BDD
- stage-8 -- E2Es converted to Cucumber BDD

### Challenges

Each of the challenges are tied to a Stage in the project and their number coincides with the Stage you should complete the challenge on.

- Challenge 1 -- Implement Cypress and configure it for E2E testing
- Challenge 2 -- Write your first E2E test, run it, and make sure it passes
- Challenge 3 -- Write an advanced E2E test that utilises most of the functions/apis in the 'Useful Stuff' slide of the talk slide deck
- Challenge 4 -- Configure Cypress for Component testing
- Challenge 5 -- Write your first Component test, run it, and make sure it passes
- Challenge 6 -- Integrate Cucumber BDD
- Challenge 7 -- Convert your existing E2E test(s) to use Cucumber BDD
