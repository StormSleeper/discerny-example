<p align="center">
  <a href="https://github.com/StormSleeper/discerny-app"><img src=".github/discerny-logo.png" width="160" alt="Discerny logo: a pair of binoculars with eyes, holding a checklist and a folder of notes"></a>
</p>

# Discerny Example

The Example for [Discerny](https://github.com/StormSleeper/discerny-app), a task tracker and knowledge base you run together with an AI agent. Use it to try Discerny before you put your own work into it.

**Everything here is made up.** It is a Discerny data folder for a fictional company, Pennywhistle Puppet Works, seen through the eyes of its Head of Quality Assurance, Imogen Hartley. The people, projects, systems and messages are invented, and every email address and web link uses an `.example` domain, which can never belong to anyone.

## What's in it

**As of:** Monday 19 October 2026. Everything is dated as if that day were today; see [Moving the dates on](#moving-the-dates-on).

A data folder in the format the app expects, in the middle of a busy few weeks:

- **Items**: 21 open in `TASKS.md`, 4 waiting in the Inbox (`INBOX.md`) and 4 done (`DONE.md`): tasks, meetings, FYIs and things Imogen is waiting for, with due dates, projects, dependencies and sub-tasks.
- **Records**: 22 people in `PEOPLE.md`, 3 projects in `PROJECTS.md` and 5 systems in `SYSTEMS.md`, with the relationships between them in `RELATIONSHIPS.md`.
- **The rest of a lived-in folder**: four Agent requests waiting in `ASK-AGENT.md`, a draft message in `drafts/`, and source-skill settings in `SOURCES.md`.

The app's README explains each file.

## Trying it

You need the app as well. Clone both repositories into the same folder:

```
git clone https://github.com/StormSleeper/discerny-app.git
git clone https://github.com/StormSleeper/discerny-example.git
```

- **In the UI:** open `discerny-app/discerny.html` in Chrome or Edge and choose the `discerny-example` folder. To switch to your own data later, use *Change folder* at the bottom of the sidebar.
- **With an agent:** in `discerny-app`, run `node tools/discern.mjs connect ../discerny-example`, then start your agent there. For Claude Code: `claude --add-dir ../discerny-example`.

Change whatever you like. To put the Example back as it was, run `git checkout . && git clean -fd` in this folder.

## Moving the dates on

As time moves on, the Example slides into the past: every due date is overdue and every meeting is over. To bring it up to today, run this in this folder:

```
node tools/refresh-dates.mjs
```

It moves every date forward by the whole weeks from the as-of date above to today, so each meeting stays on the same weekday, and then updates the as-of date. Running it again the same day changes nothing. Times of day stay as they are. To move the dates so the as-of date becomes a given Monday, add `--to <YYYY-MM-DD>`; it must be a whole number of weeks away. To move the dates in a copy of this folder, name the copy after the options.

## Used by the app's tests

The app's helper tests and skill evals run against this folder when it sits beside the app folder. They read it as of its last commit, so your own edits don't affect them. They move their copy's dates back to Monday 12 October 2026 first, so moving the dates on doesn't affect them either. If you change the Example on purpose, commit it, then run `node --test tools/test/discern.test.mjs` in the app folder, because some tests expect exact contents such as the next free ID.

## Licence

MIT with the Commons Clause, the same as the app: see `LICENSE`.
