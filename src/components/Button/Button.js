import styles from './Button.module.css';
console.log(styles)
const Button = ({
    children,
    onClick,
    variant = 'primary',
    size = 'medium',
    disabled = false,
}) => {
    // Dynamic class name generation based on variant and size
    const className = `${styles.button} ${styles[variant]} ${styles[size]}`;
    return (
        <button className={className}>
            {children}
        </button>
    )

}

export default Button