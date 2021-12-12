from argparse import ArgumentParser
from os.path import basename
import base_defs as bd
from json import load

# --- entrypoint --------------------------------------------------------------


def main():
    global wfile

    ap = ArgumentParser(description=f'Create html file\n\tUSAGE: python {basename(__file__)} -i CONTENT_FILE -o OUTPUT_FILE')
    ap.add_argument('-i', '--content_file', help='input content file (json).', type=str)
    ap.add_argument('-o', '--output_file', help='resulting output file (html).', type=str)
    args = ap.parse_args()

    if args.content_file and args.output_file:
        with open(args.content_file, 'r') as infile:
            wfile = open(args.output_file, 'w')
            json_dict = load(infile)

            wfile.write(bd.HTML_HEADER_START)
            wfile.write('<div class="container center">\n')
            wfile.write('<h1 id="spcl-fnt" style="text-align: center; font-size: 3.5em; margin-top: -5px; margin-bottom: -5px; color: #3a89ae;">Academic</h1>\n')

            if 'projects' in args.output_file:
                generate_all_sections(json_dict)

            wfile.write(bd.HTML_FOOTER)
            wfile.write('</div>\n')
            wfile.write(bd.HTML_HEADER_END)

            print(f'Done... generated file {args.output_file}')
    else:
        print('A content and output files were not provided.')
        exit(1)

# --- generation --------------------------------------------------------------


def generate_all_sections(content_dict):
    global wfile

    wfile.write('<section>\n')
    for sec_title, posts in content_dict.items():
        print(f'Generating section {sec_title}')
        wfile.write(f'<div><h3 style="text-align: left; color: #791E94;">{sec_title}</h3><hr></div>\n')
        generate_section(posts)
    wfile.write('</section>\n')


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
    if 'links' in post:
        wfile.write('<p class="card-text" style="text-align: right; margin: 0px;">')
        for itm_id, (itm_tit, itm_lnk) in enumerate(post['links'].items()):
            wfile.write('<a target="_blank" href="%s" class="card-link">%s</a>' % (itm_lnk, itm_tit))
            if itm_id != len(post['links']) - 1:
                wfile.write(" · ")
        wfile.write('</p>')

    if 'publications' in post:
        wfile.write(f'<u><p class="card-text" style="text-align: left;font-size: 1em;color: #000000;">Publications</p></u>\n')
        for pitem in post['publications']:
            wfile.write(f'<p class="card-text" style="text-align: left">{pitem["citation"]}</p>\n')
            if 'links' in pitem:
                wfile.write('<p class="card-text" style="text-align: right; margin: 0px;">')
                for itm_id, (itm_tit, itm_lnk) in enumerate(pitem['links'].items()):
                    wfile.write('<a target="_blank" href="%s" class="card-link">%s</a>' % (itm_lnk, itm_tit))
                    if itm_id != len(pitem['links']) - 1:
                        wfile.write(" · ")
                wfile.write('</p>')
    wfile.write('</li>\n')

    # post tags
    wfile.write(f'<li class="list-group-item" style="overflow: auto">\n')
    wfile.write(f'<div class="card-footer text-muted" style="width: 20%; float:left; text-align: left">{post["year"]}</div>\n')
    wfile.write('<div style="width: 80%; float:right; text-align: right">\n')
    if 'tags_tools' in post:
        for itm in post['tags_tools']:
            wfile.write(bd.CARD_TAG_TOOL % (itm))
    if 'tags_fields' in post:
        for itm in post['tags_fields']:
            wfile.write(bd.CARD_TAG_FIELD % (itm))
    wfile.write('</div>\n')
    wfile.write('</li>\n')

    wfile.write('</ul>\n')


if __name__ == '__main__':
    main()