function Button({onClick,children,index,questionsLength}) {
    

    return (
        <button className="bg-amber-500 px-10 py-2 rounded-lg font-semibold active:scale-[.95] transition-all duration-150" onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
