const Vector = ({vector}) => {
    return ( 
    <svg 
        width="10" 
        height="18" 
        viewBox="0 0 10 18" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={vector}>
    <path 
        d="M1.5 16.5L9 9L1.5 1.5" 
        stroke="#35383F" 
        stroke-width="1.5" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
    </svg>
    );
}
 
export default Vector;