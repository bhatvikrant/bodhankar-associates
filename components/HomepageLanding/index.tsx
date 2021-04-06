import Image from "next/Image";

// STYLES
import styles from "./index.module.css";

const HomepageLanding = () => {
	return (
		<header className={styles.header__container}>
			<div className={styles.header__title__container}>
				<h1>Bodhankar & Associates</h1>
			</div>
		</header>
	);
};

export default HomepageLanding;
