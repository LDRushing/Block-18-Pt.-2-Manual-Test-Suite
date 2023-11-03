//Test Suite for Puppy Bowl Web Application:

    //Main Page:
//        Test Case 1: Verify that the main page displays a properly formatted list of all players.
  //      Test Case 2: Check that each player on the roster has a "See details" button.
    //    Test Case 3: Click on "See details" for a player and ensure it displays the player's name, breed, and team (or "unassigned").
      //  Test Case 4: Confirm that the player's picture is shown in a larger version.
//        Test Case 5: Verify that there is a button to go back to the main list.
  //      Test Case 6: Check that each player has a "Remove" button.
    //    Test Case 7: Click on "Remove" for a player and ensure that player is removed from the roster without a page refresh.

//    Adding Player(s):
  //      Test Case 8: Verify that there is a form to add a new player.
    //    Test Case 9: Check that the form has at least two inputs for player name and breed, and a submit button.
      //  Test Case 10: Enter valid data in the form and click "submit." Confirm that the new player is added to the roster without a page refresh.
        //Test Case 11: Enter invalid data (e.g., blank name or breed) in the form and click "submit." Ensure that an error message is displayed, and the player is not added.
        //Test Case 12: Test the addition of a player with an image URL. Confirm that the linked image shows up as the player's portrait.

//    Removing Player(s):
  //      Test Case 13: Click on "Remove" for a player and ensure that player is removed from the roster without a page refresh.
    //    Test Case 14: Verify that the player count decreases by one after removal.
      //  Test Case 15: Try to remove a player that is not on the roster and ensure that no error occurs.

//Stretch Goals:

  //  Single Player View:
    //    Test Case 16: Click on "See details" for a player and navigate to their single player view.
      //  Test Case 17: Verify that the single player view displays all teammates (players assigned to the same team).
        //Test Case 18: Add a dropdown to change the team assignment for the current player in the single player view.
        //Test Case 19: Change the team assignment using the dropdown and verify that it updates in the single player view and in the roster immediately without a page refresh.

  //  Adding Players (Stretch Goal):
    //    Test Case 20: Add an input to the form for providing an image URL when adding a player.
      //  Test Case 21: Enter a valid image URL in the form and confirm that the linked image shows up as the player's portrait.
        //Test Case 22: Enter an invalid image URL in the form and ensure that it handles errors gracefully.

//Hey, Lucy!! Remember to adapt and update these test cases as needed during the project development to cover any new edge cases or changes in requirements. Testing is an important process, and my test suite should progress as my project does.