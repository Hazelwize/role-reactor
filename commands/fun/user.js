const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		console.log('You got to the execution of /user')
		interaction.reply({content:`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`, ephemeral: true});
	},
};
