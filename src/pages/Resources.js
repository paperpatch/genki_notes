import "./Pages.css";

function Resources() {
  return (
    <div>
      <h2>Terms of Service</h2>
      <section>
        <p>This site is for personal learning. No legal jargon here.</p>
      </section>
      <h2>Frequently Asked Questions</h2>
      <section>
        <p>
          <strong>Q: Can I use this to learn Japanese?</strong>
        </p>
        <p>
          A: This site is mainly for my own review, but if you find it helpful,
          feel free to use it.
        </p>
        <p>
          <strong>Q: Will this site be updated?</strong>
        </p>
        <p>
          A: I intend to enhance the expand the content gradually. Subject to
          change.
        </p>
        <p>
          <strong>
            Q: What resources do you recommend for learning Japanese?
          </strong>
        </p>
        <p>
          A: I recommend using textbooks like Genki for grammar, apps like Anki
          for flashcards, and online resources like YouTube. The key is to stay
          consistent and practice regularly.
        </p>
      </section>
      <h2>Contact</h2>
      <section>
        <p>
          Project on{" "}
          <a
            href="https://github.com/paperpatch/genki_notes"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
        <p>
          Visit my{" "}
          <a
            href="https://www.patrickchen.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            portfolio
          </a>
        </p>
      </section>
    </div>
  );
}

export default Resources;
