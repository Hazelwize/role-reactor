const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('joke')
		.setDescription('Tells a joke.'),
	async execute(interaction) {
		await interaction.reply('# *knock knock*');
        await wait(5000);
        await interaction.followUp('# Nobody... \n I\'m not even a person telling this joke. A better response would be : \n# "Oh God! What\'s there?!" ')
	},
};