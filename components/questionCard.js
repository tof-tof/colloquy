import { FaMinus, FaPlus } from "react-icons/fa";

export default function QuestionCard({
  title,
  questions,
  answer,
  remove,
  add,
  modifyAnswer,
  changeTitle,
  changeQuestion,
  id,
}) {
  return (
    <div className="border-4 border-secondary border-opacity-30 rounded-md p-3 bg-secondary mt-3 shadow-md bg-opacity-5">
      <input
        className="text-2xl inputBox mb-2 oneLineInput "
        value={title}
        name="title"
        type="text"
        placeholder="add a tag here"
        onChange={(e) => changeTitle(id, e.target.value)}
      />
      <div className="space-y-3 px-3">
        {questions &&
          questions.map((q, qId) => (
            <input
              type="text"
              name="question"
              placeholder="add a question here"
              value={q}
              key={qId} //review
              onChange={(e) => changeQuestion(id, qId, e.target.value)}
              className="w-full block inputBox oneLineInput"
            />
          ))}
        <span className="flex">
          <span className="w-full"></span>
          <button className="mx-2" onClick={add}>
            <FaPlus />
          </button>
          {questions && questions.length > 1 && (
            <button className="mx-2" onClick={remove}>
              <FaMinus />
            </button>
          )}
        </span>
        <input
          type="text"
          name="answer"
          placeholder="add the answer to these questions here"
          value={answer}
          className="w-full inputBox oneLineInput"
          onChange={(e) => modifyAnswer(id, e.target.value)}
        />
      </div>
      {/* add-on changes  */}
    </div>
  );
}
