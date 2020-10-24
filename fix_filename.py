import os
import re
import shutil

book_id = '9781788996662'
file_regex = r'9781788996662.*(:[^:]*).htm'
folder_regex = r'9781788996662.*(:[^:]*)_files'

dir = f'html/{book_id}/'

for file in os.listdir(dir):
    if file.endswith("_files"):
        match = re.search(folder_regex, file)
        if match:
            to_remove = match.group(1)
            print(to_remove)

            # remove book title from file name
            old_file_name = file
            new_file_name = file.replace(to_remove, '')

            # remove ':' from file name
            new_file_name = new_file_name.replace(':', '_')

            old_file = os.path.join(dir, old_file_name)
            new_file = os.path.join(dir, new_file_name)
            shutil.move(old_file, new_file)
    
    elif file.endswith(".htm"):
        match = re.search(file_regex, file)
        if match:
            to_remove = match.group(1)
            print(to_remove)
            
            # remove book title from folder name
            old_file_name = file
            new_file_name = file.replace(to_remove, '')

            # remove ':' from file name
            new_file_name = new_file_name.replace(':', '_')

            old_file = os.path.join(dir, old_file_name)
            new_file = os.path.join(dir, new_file_name)

            with open(old_file, 'r') as file:
                filedata = file.read()

            # replace folder name in href
            old_folder_name = old_file_name.replace('.htm', '_files')
            new_folder_name = new_file_name.replace('.htm', '_files')
            filedata = filedata.replace(old_folder_name, new_folder_name)

            with open(old_file, 'w') as file:
                file.write(filedata)

            shutil.move(old_file, new_file)

    print(old_file_name)
    print(new_file_name)
