const { SlashCommandBuilder, ActionRowBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Displays a list of available commands.'),
	async execute(interaction) {
		
		await interaction.reply({
            content: ">>> ## Available Commands for RoleReactor: \n`/help`: This will bring you to the list of available commands. (You are here.) \n`/ping`:Play a game of ping-pong with the bot! \n`/user`: Pulls up the date that you joined discord.\n`/joke`: I tell you a joke! \n \n### Would you like to see other features?",
            
        });
	},
};