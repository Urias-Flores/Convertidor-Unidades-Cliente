const Line = ( {isFocus} ) => {
    return (
        <div className="grafic">
            <div className={isFocus ? 'dinamicLine active' : 'dinamicLine'}></div>
        </div>
    )
}

export default Line