import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { Link } from "gatsby"

const Jobs = ({ jobs, title, showLink }) => {
  const [value, setValue] = React.useState(0)
  const { company, position, date, description } = jobs[value]

  return (
    <section className="section jobs">
      <Title title={title} />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {description.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      {showLink && (
        <Link to="/about" className="btn center-btn">
          more info
        </Link>
      )}
    </section>
  )
}

export default Jobs
