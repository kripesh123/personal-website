import React from "react"
import Title from "./Title"
import countries from "../constants/countries"

const Countries = () => {
  return (
    <section className="section bg-grey">
      <Title title="visited countries" />
      <div className="section-center countries-center">
        {countries.map(country => {
          const { id, icon, title, text } = country
          return (
            <article key={id} className="country">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Countries
