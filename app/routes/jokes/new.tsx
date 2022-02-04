export default function NewJokeRoute() {
  return (
    <>
      <span>Add your own joke!</span>
      <form method="post">
        <label>
          Name:<input type="text" placeholder="Type your name"></input>
        </label>
        <label>
          Content:<textarea placeholder="Joke here ..."></textarea>
        </label>
        <button type="submit">Add Joke</button>
      </form>
    </>
  );
}
