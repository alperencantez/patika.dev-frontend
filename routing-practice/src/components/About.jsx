import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <main className="text-center bg-success text-light">
        <h2>Who are we?</h2>
        <h4 className="mb-5">
          That feels like an existential question, don't you think? Here's a
          text you might want to read while questioning your existence.
        </h4>

        <h5 className="mb-5 col-4 offset-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, consequuntur ex facilis quam beatae impedit cum porro
          rerum. Possimus, doloribus magni earum culpa odit dicta explicabo
          dolore repellat iusto doloremque harum officiis nulla sapiente in eius
          aperiam vitae animi inventore, nemo rerum!
        </h5>

        <nav>
          <Link
            to="/"
            className="anchorUnderLineRemove text-light h1 text-primary"
          >
            Home
          </Link>
        </nav>
      </main>
    </>
  );
}

export default About;
