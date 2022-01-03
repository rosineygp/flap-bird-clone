import Phaser from "phaser"

class BaseScene extends Phaser.Scene {
    constructor(key, config) {
        super(key)
        this.config = config

        this.fontSize = 34
        this.lineHeight = 42
        this.fontOptions = {
            fontSize: `${this.fontSize}px`,
            fill: '#CD00FF'
        }

        this.screenCenter = [config.width / 2, config.height / 2]
    }

    create() {
        this.add.image(0, 0, 'sky').setOrigin(0)
    }

    createMenu(menu) {

        let lastMenuPositionY = 0

        const middleY = this.screenCenter[1] - (this.lineHeight * parseInt((menu.length / 2)))

        menu.forEach(item => {
            const menuPosition = [this.screenCenter[0], middleY + lastMenuPositionY]
            this.add.text(...menuPosition, item.text, this.fontOptions).setOrigin(.5, 0)
            lastMenuPositionY += this.lineHeight
        })
    }
}

export default BaseScene