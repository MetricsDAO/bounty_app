

def clean_discord_handle(handle):
    return handle.strip().\
        replace("#", '').\
        replace("@", '').\
        replace("/", '').\
        replace("!", '').\
        replace("%", '').\
        replace("(", '').\
        replace(")", '').\
        replace("^", '').\
        replace("[", '').\
        replace("]", '').\
        replace("{", '').\
        replace("}", '').\
        replace("|", '').\
        replace("~", '').\
        replace("`", '').\
        replace("'", '').\
        replace('"', '').\
        replace(';', '').\
        replace(':', '').\
        replace('+', '').\
        replace('=', '').\
        replace('*', '').\
        replace('>', '').\
        replace('<', '').\
        replace(' ', '').\
        replace(',', '')
