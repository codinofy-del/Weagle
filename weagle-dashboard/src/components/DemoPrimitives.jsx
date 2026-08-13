import React from 'react'
import { Icon } from './icons'

function DemoPrimitives() {
  return (
    <section className="demo-card" aria-label="Design token demo components">
      <div className="demo-card__content">
        <h2 className="demo-card__title">Tokenized operations primitives</h2>
        <p className="demo-card__text">Demo Card, Button, and Chip rendered from design tokens only.</p>
      </div>
      <div className="header-left">
        <span className="chip chip--success"><Icon name="CheckCircle2" />Ready</span>
        <button className="btn-primary">Review Tokens</button>
      </div>
    </section>
  )
}

export default DemoPrimitives
