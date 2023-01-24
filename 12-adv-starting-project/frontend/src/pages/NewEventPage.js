import React from "react";
import { Link } from "react-router-dom";

function NewEventPage() {
  return (
    <div>
      NewEventPage
      <div>
        <button>
          <Link to={".."} relative="path">
            back
          </Link>
        </button>
      </div>
    </div>
  );
}

export default NewEventPage;
