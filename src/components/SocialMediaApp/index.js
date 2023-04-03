import './index.css'

const SocialMediaApp = props => {
  const {appDetails, deleteHistoryApp} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = appDetails

  const onClickDelete = () => {
    deleteHistoryApp(id)
  }

  return (
    <li className="app-details">
      <div className="abt-app">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="domain-logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>

      <div className="dlt-btn-container">
        <button type="button" onClick={onClickDelete} data-testid="delete">
          <img
            className="dlt-btn"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default SocialMediaApp
