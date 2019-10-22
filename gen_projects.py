from argparse import ArgumentParser
from os.path import basename
import base_defs
from json import load

OUTPUT_FILE = 'projects.html'

# --- entrypoint --------------------------------------------------------------

def main():
    global wfile

    ap = ArgumentParser(description=f'Create {OUTPUT_FILE}\n\tUSAGE: python {basename(__file__)} -i CONTENT_FILE')
    ap.add_argument('-i', '--content_file', help='input content file (json).', type=str)
    args = ap.parse_args()

    if args.content_file:
        with open(args.content_file, 'r') as infile:
            wfile = open(OUTPUT_FILE, 'w')
            json_dict = load(infile)
            wfile.write(base_defs.HTML_HEADER_START)
            generate_all_sections(json_dict)
            wfile.write(base_defs.HTML_HEADER_END)
            print(f'Done... generated file {OUTPUT_FILE}')
    else:
        print('A content file was not provided.')
        exit(1)

# --- generation --------------------------------------------------------------

def generate_all_sections(content_dict):
    global wfile

    wfile.write('<div class="container center">\n')
    wfile.write('<section>\n')
    for sec_title, posts in content_dict.items():
        print(f'Generating section {sec_title}')
        wfile.write(f'<div><h3 style="text-align: left">{sec_title}</h3><hr></div>\n')
        generate_section(posts)
    wfile.write('</section>\n')
    wfile.write(base_defs.HTML_FOOTER)
    wfile.write('</div>\n')

def generate_section(section_posts):
    global wfile

    new_row = False
    for i, post in enumerate(section_posts):
        if 0 == (i % 3):
            wfile.write('<div class="col-md-12">\n')
            new_row = True

        wfile.write('<div class="card col-md-4">\n')
        generate_post(post)
        wfile.write('</div>\n')

        if new_row and 0 == ((i + 1) % 3):
            wfile.write('</div>\n')
            new_row = False

    if new_row:
        wfile.write('</div>\n')

def generate_post(post):
    global wfile

    wfile.write('<ul class="list-group list-group-flush">\n')

    # post header
    wfile.write('<li class="list-group-item">\n')
    wfile.write(f'<h5 class="card-title"><b>{post["title"]}</b></h5>\n')
    if 'subtitle' in post:
        wfile.write(f'<h6 class="card-subtitle text-muted">{post["subtitle"]}</h6>\n')
    wfile.write(f'<img id="photorcorners" src="{post["thumbnail"]}" alt="Card image"  style="max-width: 90%">\n')
    wfile.write('</li>\n')

    # post body
    wfile.write('<li class="list-group-item">\n')
    wfile.write(f'<p class="card-text" style="text-align: left">{post["desc"]}</p>\n')
    if 'paper' in post:
        wfile.write(base_defs.CARD_LINK % (post["paper"], "Paper"))
    if 'check_it_out' in post:
        wfile.write(base_defs.CARD_LINK % (post["check_it_out"], "Check it out"))
    if 'github' in post:
        wfile.write(base_defs.CARD_LINK % (post["github"], "Repository (Github)"))
    wfile.write('</li>\n')

    # post tags
    wfile.write(f'<li class="list-group-item" style="overflow: auto">\n')
    wfile.write(f'<div class="card-footer text-muted" style="width: 20%; float:left; text-align: left">{post["year"]}</div>\n')
    wfile.write('<div style="width: 80%; float:right; text-align: right">\n')
    for itm in post['tags_tools']:
        wfile.write(base_defs.CARD_TAG_TOOL % (itm))
    for itm in post['tags_fields']:
        wfile.write(base_defs.CARD_TAG_FIELD % (itm))
    wfile.write('</div>\n')
    wfile.write('</li>\n')

    # appendix
    if 'citation' in post:
        wfile.write('<li class="list-group-item">\n')
        wfile.write(f'<p class="card-text" style="text-align: left">{post["citation"]}</p>\n')
        wfile.write('</li>\n')

    wfile.write('</ul>\n')

if __name__ == '__main__':
    main()