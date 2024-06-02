import './index.css'

const BrowserItems = props => {
  const {lists, deleteFun} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = lists
  const deleteF = () => {
    deleteFun(id)
  }
  return (
    <li className="main-container-2">
      <div className="details-container">
        <div className="para-12">
          <p className="para-1">{timeAccessed}</p>
        </div>
        <div className="details-container-2">
          <div className="domain-container">
            <div className="logo-container">
              <img src={logoUrl} alt="domain logo" className="logo" />
            </div>
            <div className="title-container-1">
              <p className="title">{title}</p>
              <p className="domainUrl">{domainUrl}</p>
            </div>
          </div>
          <div className="delete-container">
            <button
              className="btn"
              data-testid="delete"
              onClick={deleteF}
              type="button"
            >
              <img
                className="delete-btn"
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                alt="delete"
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}
export default BrowserItems
