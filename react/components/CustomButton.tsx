import React, { Component } from 'react'

import Table from './Table'

/**
 * This component is responsible for rendering the custom button itself. For instance,
 * we use it to render a table that contains the name of the items that are in the
 * order form.
 */
class CustomButton extends Component<CustomButtonProps, {}> {
  componentDidMount() {
    window.vtex.renderLoader.render(
      "checkout/universal/checkout-click-retira",
      window.document.getElementById("shipping-data")
    )
  }

  render() {
    const { items } = this.props

    return (
      <div>
        <h2>This is a checkout button :)</h2>
        {items ? <Table items={items} /> : null}
      </div>
    )
  }
}

interface CustomButtonProps {
  items: OrderFormItem[]
}

interface CustomButtonState { }

export default CustomButton
