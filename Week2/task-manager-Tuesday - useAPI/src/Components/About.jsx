const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Task Manager</h1>
        <p>
          The <strong>Task Manager</strong> is a simple and efficient app that
          allows users to manage their tasks. You can add new tasks, mark them
          as complete, and remove them. The app fetches task data from a mock
          API (JSONPlaceholder), and displays the tasks in an organized list.
          Each task has a button to mark it as completed, visually indicating
          its status.
        </p>
        <h2>Key Features</h2>
        <ul>
          <li>Fetches tasks from an external API (JSONPlaceholder).</li>
          <li>Allows users to add, complete, and delete tasks.</li>
          <li>Shows loading and error states during data fetching.</li>
          <li>Responsive design for desktop and mobile devices.</li>
        </ul>
        <h2>How It Works</h2>
        <p>
          The app retrieves task data using the <strong>useEffect</strong> hook
          in React. Once the data is fetched, it is displayed in a list. You can
          mark tasks as completed with the "Complete" button, and they are
          visually updated. You can also delete tasks from the list.
        </p>
      </div>

    </div>
  );
};

export default About;
