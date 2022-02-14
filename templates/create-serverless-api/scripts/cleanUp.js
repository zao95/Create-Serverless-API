
const path = require('path')
const fs = require('fs/promises')

const cleanUp = async () => {
	const tempPath = path.join(__dirname, '../dist/temp')
    await fs.rm(tempPath, { recursive: true, force: true })
}

(async () => {
	try{
		await cleanUp()
	} catch (e) {
		console.error(e)
		throw e
	}
})()
