import React from 'react'

const CategorySelect = (props) => {
    return (
        <div>
            <div className="selectedCategory">
                <span><u>Category</u> : {props.category}</span>
            </div>
        </div>
    )
}

export default CategorySelect
