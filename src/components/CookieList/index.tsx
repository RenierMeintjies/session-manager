import CookieRow from './CookieRow'
import { Delete as DeleteIcon } from '@material-ui/icons'

import { useCookies } from './hooks'
import chromeApi from '../../api/chrome'

const CookieList = () => {
	const cookies = useCookies()

	const handleDeleteAll = () => {
		if (window.confirm(`Are you sure you want to delete all cookies?`)) {
			cookies.forEach((cookie: any) => {
				chromeApi.deleteCookie(cookie)
			})
		}
	}

	return (
		<table>
			<tr>
				<th>Domain</th>
				<th>Key</th>
				<th>Value</th>
				<th>{cookies.length > 0 && <DeleteIcon onClick={handleDeleteAll} />}</th>
			</tr>
			{cookies.length > 0 ? (
				cookies.map((cookie: any, index: any) => (
					<CookieRow key={`cookie-${cookie.domain}-${index}`} cookie={cookie} index={index} />
				))
			) : (
				<h4>No cookies for you :c</h4>
			)}
		</table>
	)
}

export default CookieList
