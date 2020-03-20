import React from 'react';
import HeaderStyle from './style';

const Header: React.FC = () => {
	const logoMoovin =
		'https://cdn.moovin.com.br/project/manager-panel/img/logo-moovin.svg'

	return (
        <HeaderStyle>
            <div className='App'>
                <img alt='Logo da Moovin' src={logoMoovin} />
            </div>
        </HeaderStyle>
	)
}

export default Header
