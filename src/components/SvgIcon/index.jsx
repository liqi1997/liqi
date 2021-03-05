
function SvgIcon({ name = '', size = 40 }) {
    return <svg aria-hidden='true' style={{ height: size, width: size, }}>
        <use href={name} ></use>
    </svg>
}

export default SvgIcon;