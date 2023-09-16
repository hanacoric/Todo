import { Selector } from "testcafe";

fixture`Demo`
    .page("./index.html");

test("Create new todo", async t => {
    await t
        .expect(Selector("ul.todo-list li.todo").count).eql(0)  
        .typeText(Selector(".new-todo"), "Water the flowers")
        .pressKey("enter")
        .expect(Selector("ul.todo-list li.todo").count).eql(1);  
});

test("Mark as done", async t => {
    // Selectors
    const todoInput = Selector(".new-todo");
    const todoItemCheckbox = Selector("ul.todo-list li.todo input.toggle");
    const todoListItems = Selector("ul.todo-list li.todo");

    // Create a pre-assertion that validates that no existing tasks are present.
    await t.expect(todoListItems.count).eql(0);

    // Create a new task
    await t
        .typeText(todoInput, "Feed the fish")
        .pressKey("enter");

    // Ensure the task has been added
    await t.expect(todoListItems.count).eql(1);

    // Ensure that the checkbox for the newly created task exists but is not checked
    await t
        .expect(todoItemCheckbox.exists).ok()
        .expect(todoItemCheckbox.checked).notOk();

    // Mark the task as completed
    await t.click(todoItemCheckbox);

    // Assert that the task is marked as completed
    await t.expect(todoItemCheckbox.checked).ok();
});

test("Mark as done", async t => {
    // Selectors
    const todoInput = Selector(".new-todo");
    const todoItemCheckbox = Selector("ul.todo-list li.todo input.toggle");
    const todoListItems = Selector("ul.todo-list li.todo");

    // Create a pre-assertion that validates that no existing tasks are on the list.
    await t.expect(todoListItems.count).eql(0);

    // Create a new task
    await t
        .typeText(todoInput, "Feed the fish")
        .pressKey("enter");

    // Ensure the task has been added
    await t.expect(todoListItems.count).eql(1);

    // Ensure that the checkbox for the newly created task exists but is not checked
    await t
        .expect(todoItemCheckbox.exists).ok()
        .expect(todoItemCheckbox.checked).notOk();

    // Mark the task as completed
    await t.click(todoItemCheckbox);

    // Assert that the number of completed tasks is now 1.
    await t.expect(completedTaskSelector.count).eql(1);
    //comment
});
