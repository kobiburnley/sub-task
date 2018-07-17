import {Task} from "./task"

export const tasks = [
  new Task(
    "Setup e2e coverage",
    [
      new Task(
        "Jenkins plugin",
        [],
        4
      ),
      new Task(
        "Setup mock DB",
        [],
        2
      ),
      new Task(
        "My Task 3",
        [],
        2
      ),
    ]
  ),

  new Task(
    "New company site",
    [
      new Task(
        "New login page in React",
        [
          new Task(
            "Setup new company theme",
            [],
            3
          ),
          new Task(
            "Design controllers & view model",
            [],
            2
          ),
          new Task(
            "Integrate forms library",
            [],
            3
          ),
        ]
      )
    ]
  )
]
