# -*- coding: utf-8 -*-
"""
Created on Wed Dec 02 17:43:52 2015

@author: okada

$Id: qc.py 40 2016-02-16 08:58:53Z aokada $
$Rev: 40 $
"""

def convert_tojs(input_file, output_file):
    
    js_template = """var base = [
{data}
];
function get_data_base() {{return base;}}
"""
    import pandas
    import os
    
    if os.path.getsize(input_file) == 0:
        print "skip blank file %s" % input_file
        return False
        
    # data read
    try:
        data = pandas.read_csv(input_file, sep = ",", engine = "python")
    except StopIteration:
        print "skip no data file %s" % input_file
        return False
    except Exception as e:
        print "failure open data %s, %s" % (input_file, e.message)
        return False
        
    if len(data) == 0:
        return False
    
    data_text = ""
    for i in range(len(data)):
        item_text = "{"
        for j in range(len(data.iloc[i])):
            col_name = data.columns[j]
            ratio = col_name.split("x_ratio")
            val = str(data.iloc[i][j]);
            if val == "nan":
                val = "0"
                
            if col_name == "ID":
                item_text += col_name + ':"' + str(data.iloc[i][j]) + '",'
            elif len(ratio) == 2:
                item_text += 'ratio_%sx:' % (ratio[0]) + val + ','
            else:
                item_text += col_name + ':' + val + ','
                
        data_text += item_text + "},\n"
    
    f = open(output_file, "w")
    f.write(js_template.format(data=data_text))
    f.close()

    return True

def create_html(output_html_dir, org_html, project_name, config):

    chart_template = """<div class="row" style="margin-top: 40px;">
    <div id="{chart}"><strong>{title}</strong><br></div>
</div>
"""

    from paplot import tools
    import os
    
    f_template = open(os.path.dirname(os.path.abspath(__file__)) + "/templates/" + org_html)
    html_template = f_template.read()
    f_template.close()
    
    charts_text = ""
    if config.getboolean("qc", "chart_coverage") == True:
        charts_text += chart_template.format(chart = "chart_coverage", title = "depth coverage")
    
    if config.getboolean("qc", "chart_average") == True:
        charts_text += chart_template.format(chart = "chart_average", title = "depth average")
    
    if config.getboolean("qc", "chart_mapped") == True:
        charts_text += chart_template.format(chart = "chart_mapped", title = "mapped_reads/total_reads")

    if config.getboolean("qc", "chart_insert") == True:
        charts_text += chart_template.format(chart = "chart_insert", title = "mean_insert_size")
    
    if config.getboolean("qc", "chart_duplicate") == True:
        charts_text += chart_template.format(chart = "chart_duplicate", title = "duplicate_reads/total_reads")
    
    if config.getboolean("qc", "chart_length") == True:
        charts_text += chart_template.format(chart = "chart_length", title = "read_length_r1, read_length_r2")

    f_html = open(output_html_dir + "/" + org_html, "w")
    f_html.write(
        html_template.format(project = project_name, 
        version = tools.version_text(),
        date = tools.now_string(),
        style = config.get("style", "name"),
        charts = charts_text
        ))
    f_html.close()
