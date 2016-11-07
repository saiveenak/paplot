(function() {
msig_data = {};

msig_data.tooltip_format = {
    ref0:{format:[[{label:'A: ',type:'fix',keys:[],ext:''},{label:'{a}',type:'numeric',keys:['a',],ext:'.2'},],[{label:'C: ',type:'fix',keys:[],ext:''},{label:'{c}',type:'numeric',keys:['c',],ext:'.2'},],[{label:'G: ',type:'fix',keys:[],ext:''},{label:'{g}',type:'numeric',keys:['g',],ext:'.2'},],[{label:'T: ',type:'fix',keys:[],ext:''},{label:'{t}',type:'numeric',keys:['t',],ext:'.2'},],], keys: '{a} {c} {g} {t} '},ref1:{format:[[{label:'A: ',type:'fix',keys:[],ext:''},{label:'{a}',type:'numeric',keys:['a',],ext:'.2'},],[{label:'C: ',type:'fix',keys:[],ext:''},{label:'{c}',type:'numeric',keys:['c',],ext:'.2'},],[{label:'G: ',type:'fix',keys:[],ext:''},{label:'{g}',type:'numeric',keys:['g',],ext:'.2'},],[{label:'T: ',type:'fix',keys:[],ext:''},{label:'{t}',type:'numeric',keys:['t',],ext:'.2'},],], keys: '{a} {c} {g} {t} '},ref2:{format:[[{label:'A: ',type:'fix',keys:[],ext:''},{label:'{a}',type:'numeric',keys:['a',],ext:'.2'},],[{label:'C: ',type:'fix',keys:[],ext:''},{label:'{c}',type:'numeric',keys:['c',],ext:'.2'},],[{label:'G: ',type:'fix',keys:[],ext:''},{label:'{g}',type:'numeric',keys:['g',],ext:'.2'},],[{label:'T: ',type:'fix',keys:[],ext:''},{label:'{t}',type:'numeric',keys:['t',],ext:'.2'},],], keys: '{a} {c} {g} {t} '},ref3:{format:[[{label:'A: ',type:'fix',keys:[],ext:''},{label:'{a}',type:'numeric',keys:['a',],ext:'.2'},],[{label:'C: ',type:'fix',keys:[],ext:''},{label:'{c}',type:'numeric',keys:['c',],ext:'.2'},],[{label:'G: ',type:'fix',keys:[],ext:''},{label:'{g}',type:'numeric',keys:['g',],ext:'.2'},],[{label:'T: ',type:'fix',keys:[],ext:''},{label:'{t}',type:'numeric',keys:['t',],ext:'.2'},],], keys: '{a} {c} {g} {t} '},ref4:{format:[[{label:'A: ',type:'fix',keys:[],ext:''},{label:'{a}',type:'numeric',keys:['a',],ext:'.2'},],[{label:'C: ',type:'fix',keys:[],ext:''},{label:'{c}',type:'numeric',keys:['c',],ext:'.2'},],[{label:'G: ',type:'fix',keys:[],ext:''},{label:'{g}',type:'numeric',keys:['g',],ext:'.2'},],[{label:'T: ',type:'fix',keys:[],ext:''},{label:'{t}',type:'numeric',keys:['t',],ext:'.2'},],], keys: '{a} {c} {g} {t} '},
    alt:{format:[[{label:'C -> A: ',type:'fix',keys:[],ext:''},{label:'{ca}',type:'numeric',keys:['ca',],ext:'.2'},],[{label:'C -> G: ',type:'fix',keys:[],ext:''},{label:'{cg}',type:'numeric',keys:['cg',],ext:'.2'},],[{label:'C -> T: ',type:'fix',keys:[],ext:''},{label:'{ct}',type:'numeric',keys:['ct',],ext:'.2'},],[{label:'T -> A: ',type:'fix',keys:[],ext:''},{label:'{ta}',type:'numeric',keys:['ta',],ext:'.2'},],[{label:'T -> C: ',type:'fix',keys:[],ext:''},{label:'{tc}',type:'numeric',keys:['tc',],ext:'.2'},],[{label:'T -> G: ',type:'fix',keys:[],ext:''},{label:'{tg}',type:'numeric',keys:['tg',],ext:'.2'},],], keys: '{ca} {cg} {ct} {ta} {tc} {tg} '},
    strand:{format:[[{label:'+ ',type:'fix',keys:[],ext:''},{label:'{plus}',type:'numeric',keys:['plus',],ext:'.2'},{label:' - ',type:'fix',keys:[],ext:''},{label:'{minus}',type:'numeric',keys:['minus',],ext:'.2'},],], keys: '{minus} {plus} '},
    mutation_title:{format:[[{label:'{id}',type:'str',keys:['id',],ext:''},],], keys: '{id} '},
    mutation_partial:{format:[[{label:'{sig}',type:'str',keys:['sig',],ext:''},{label:': ',type:'fix',keys:[],ext:''},{label:'{#sum_item_value}',type:'numeric',keys:['#sum_item_value',],ext:'.2'},],], keys: '{#sum_item_value} {sig} '},
};

msig_data.ref_reduce_rate = [1,1,1,1,1];
msig_data.label_colors = {'A': '#06B838', 'C': '#609CFF', 'G': '#B69D02', 'T': '#F6766D', 'plus': '#00BEC3', 'minus': '#F263E2'};
msig_data.signatures = ['signature 1','signature 2','signature 3','signature 4','signature 5','background',];
msig_data.sig_colors = ['#f39700','#6cbb5a','#e60012','#00ada9','#e85298','#9CAEB7',];
msig_data.Ids = ['TCGA-OR-A5J1','TCGA-OR-A5J2','TCGA-OR-A5J3','TCGA-OR-A5J4','TCGA-OR-A5J5','TCGA-OR-A5J6','TCGA-OR-A5J7','TCGA-OR-A5J8','TCGA-OR-A5J9','TCGA-OR-A5JA','TCGA-OR-A5JB','TCGA-OR-A5JC','TCGA-OR-A5JD','TCGA-OR-A5JE','TCGA-OR-A5JF','TCGA-OR-A5JG','TCGA-OR-A5JH','TCGA-OR-A5JI','TCGA-OR-A5JJ','TCGA-OR-A5JK','TCGA-OR-A5JL','TCGA-OR-A5JM','TCGA-OR-A5JO','TCGA-OR-A5JP','TCGA-OR-A5JQ','TCGA-OR-A5JR','TCGA-OR-A5JS','TCGA-OR-A5JT','TCGA-OR-A5JU','TCGA-OR-A5JV','TCGA-OR-A5JW','TCGA-OR-A5JX','TCGA-OR-A5JY','TCGA-OR-A5JZ','TCGA-OR-A5K0','TCGA-OR-A5K1','TCGA-OR-A5K2','TCGA-OR-A5K3','TCGA-OR-A5K4','TCGA-OR-A5K5','TCGA-OR-A5K6','TCGA-OR-A5K8','TCGA-OR-A5K9','TCGA-OR-A5KB','TCGA-OR-A5KO','TCGA-OR-A5KP','TCGA-OR-A5KQ','TCGA-OR-A5KS','TCGA-OR-A5KT','TCGA-OR-A5KU','TCGA-OR-A5KV','TCGA-OR-A5KW','TCGA-OR-A5KX','TCGA-OR-A5KY','TCGA-OR-A5KZ','TCGA-OR-A5L1','TCGA-OR-A5L2','TCGA-OR-A5L3','TCGA-OR-A5L4','TCGA-OR-A5L5','TCGA-OR-A5L6','TCGA-OR-A5L8','TCGA-OR-A5L9','TCGA-OR-A5LA','TCGA-OR-A5LB','TCGA-OR-A5LC','TCGA-OR-A5LD','TCGA-OR-A5LE','TCGA-OR-A5LF','TCGA-OR-A5LG','TCGA-OR-A5LH','TCGA-OR-A5LI','TCGA-OR-A5LJ','TCGA-OR-A5LK','TCGA-OR-A5LL','TCGA-OR-A5LN','TCGA-OR-A5LO','TCGA-OR-A5LP','TCGA-OR-A5LR','TCGA-OR-A5LS','TCGA-OR-A5LT','TCGA-OU-A5PI','TCGA-P6-A5OF','TCGA-P6-A5OH','TCGA-PA-A5YG','TCGA-PK-A5H8','TCGA-PK-A5H9','TCGA-PK-A5HA','TCGA-PK-A5HB','TCGA-PK-A5HC',];

msig_data.dataset_ref = [[[0.208,0.264,0.319,0.207],[0.332,0.28,0.268,0.118],[0,0.952,0,0.047],[0.022,0.01,0.961,0.005],[0.207,0.265,0.341,0.185],],[[0.102,0.378,0.288,0.231],[0.202,0.388,0.281,0.127],[0,0.588,0,0.411],[0.175,0,0.528,0.296],[0.057,0.259,0.565,0.117],],[[0.141,0.329,0.486,0.042],[0.141,0.436,0.364,0.056],[0,0.677,0,0.322],[0.063,0.414,0.484,0.037],[0.193,0.461,0.224,0.119],],[[0.261,0.115,0.238,0.384],[0.08,0.093,0.547,0.277],[0,0.753,0,0.246],[0.22,0.328,0.234,0.216],[0.172,0.263,0.32,0.243],],[[0.273,0.227,0.242,0.256],[0.117,0.315,0.235,0.331],[0,0.986,0,0.013],[0.329,0.245,0.153,0.271],[0.248,0.192,0.298,0.26],],];
msig_data.dataset_alt = [[[0,0,0,0],[0,0,0,0.952],[0,0,0,0],[0.002,0.039,0.004,0],],[[0,0,0,0],[0.084,0,0.181,0.322],[0,0,0,0],[0,0.41,0,0],],[[0,0,0,0],[0.201,0,0.167,0.309],[0,0,0,0],[0.036,0.142,0.142,0],],[[0,0,0,0],[0.039,0,0.009,0.703],[0,0,0,0],[0,0.246,0,0],],[[0,0,0,0],[0.766,0,0.124,0.094],[0,0,0,0],[0.013,0,0,0],],];
msig_data.dataset_strand = [[0.541,0.458],[0.379,0.62],[0.628,0.371],[0.478,0.521],[0.411,0.588],];

// [ID, signature, value]
msig_data.mutations = [[0,0,0.218000],[0,1,0.000000],[0,2,0.033000],[0,3,0.296000],[0,4,0.061000],[0,5,0.389000],[1,0,0.160000],[1,1,0.109000],[1,2,0.232000],[1,3,0.146000],[1,4,0.132000],[1,5,0.218000],[2,0,0.131000],[2,1,0.263000],[2,2,0.306000],[2,3,0.045000],[2,4,0.089000],[2,5,0.163000],[3,0,0.052000],[3,1,0.068000],[3,2,0.100000],[3,3,0.095000],[3,4,0.165000],[3,5,0.517000],[4,0,0.761000],[4,1,0.046000],[4,2,0.054000],[4,3,0.081000],[4,4,0.027000],[4,5,0.028000],[5,0,0.140000],[5,1,0.318000],[5,2,0.261000],[5,3,0.026000],[5,4,0.000000],[5,5,0.253000],[6,0,0.171000],[6,1,0.135000],[6,2,0.127000],[6,3,0.115000],[6,4,0.095000],[6,5,0.354000],[7,0,0.034000],[7,1,0.123000],[7,2,0.195000],[7,3,0.074000],[7,4,0.402000],[7,5,0.169000],[8,0,0.111000],[8,1,0.308000],[8,2,0.196000],[8,3,0.097000],[8,4,0.027000],[8,5,0.258000],[9,0,0.017000],[9,1,0.026000],[9,2,0.012000],[9,3,0.004000],[9,4,0.931000],[9,5,0.007000],[10,0,0.037000],[10,1,0.131000],[10,2,0.029000],[10,3,0.091000],[10,4,0.423000],[10,5,0.286000],[11,0,0.057000],[11,1,0.296000],[11,2,0.122000],[11,3,0.176000],[11,4,0.039000],[11,5,0.308000],[12,0,0.096000],[12,1,0.222000],[12,2,0.143000],[12,3,0.167000],[12,4,0.046000],[12,5,0.323000],[13,0,0.080000],[13,1,0.241000],[13,2,0.221000],[13,3,0.072000],[13,4,0.084000],[13,5,0.299000],[14,0,0.042000],[14,1,0.225000],[14,2,0.134000],[14,3,0.105000],[14,4,0.057000],[14,5,0.434000],[15,0,0.062000],[15,1,0.286000],[15,2,0.382000],[15,3,0.095000],[15,4,0.042000],[15,5,0.129000],[16,0,0.037000],[16,1,0.276000],[16,2,0.272000],[16,3,0.053000],[16,4,0.101000],[16,5,0.258000],[17,0,0.143000],[17,1,0.225000],[17,2,0.154000],[17,3,0.036000],[17,4,0.000000],[17,5,0.439000],[18,0,0.088000],[18,1,0.373000],[18,2,0.196000],[18,3,0.120000],[18,4,0.000000],[18,5,0.221000],[19,0,0.139000],[19,1,0.433000],[19,2,0.062000],[19,3,0.000000],[19,4,0.000000],[19,5,0.364000],[20,0,0.113000],[20,1,0.349000],[20,2,0.267000],[20,3,0.143000],[20,4,0.000000],[20,5,0.126000],[21,0,0.069000],[21,1,0.377000],[21,2,0.162000],[21,3,0.102000],[21,4,0.084000],[21,5,0.204000],[22,0,0.031000],[22,1,0.349000],[22,2,0.314000],[22,3,0.080000],[22,4,0.101000],[22,5,0.121000],[23,0,0.105000],[23,1,0.188000],[23,2,0.200000],[23,3,0.069000],[23,4,0.106000],[23,5,0.328000],[24,0,0.123000],[24,1,0.327000],[24,2,0.133000],[24,3,0.098000],[24,4,0.000000],[24,5,0.317000],[25,0,0.112000],[25,1,0.206000],[25,2,0.266000],[25,3,0.156000],[25,4,0.000000],[25,5,0.259000],[26,0,0.040000],[26,1,0.365000],[26,2,0.254000],[26,3,0.218000],[26,4,0.020000],[26,5,0.100000],[27,0,0.100000],[27,1,0.128000],[27,2,0.180000],[27,3,0.139000],[27,4,0.119000],[27,5,0.330000],[28,0,0.055000],[28,1,0.276000],[28,2,0.423000],[28,3,0.071000],[28,4,0.049000],[28,5,0.122000],[29,0,0.149000],[29,1,0.116000],[29,2,0.245000],[29,3,0.087000],[29,4,0.095000],[29,5,0.304000],[30,0,0.095000],[30,1,0.194000],[30,2,0.212000],[30,3,0.105000],[30,4,0.097000],[30,5,0.295000],[31,0,0.147000],[31,1,0.235000],[31,2,0.070000],[31,3,0.163000],[31,4,0.041000],[31,5,0.341000],[32,0,0.129000],[32,1,0.067000],[32,2,0.106000],[32,3,0.156000],[32,4,0.130000],[32,5,0.409000],[33,0,0.089000],[33,1,0.391000],[33,2,0.251000],[33,3,0.111000],[33,4,0.002000],[33,5,0.152000],[34,0,0.032000],[34,1,0.328000],[34,2,0.231000],[34,3,0.092000],[34,4,0.086000],[34,5,0.228000],[35,0,0.072000],[35,1,0.247000],[35,2,0.287000],[35,3,0.097000],[35,4,0.003000],[35,5,0.290000],[36,0,0.077000],[36,1,0.254000],[36,2,0.245000],[36,3,0.066000],[36,4,0.056000],[36,5,0.299000],[37,0,0.111000],[37,1,0.326000],[37,2,0.302000],[37,3,0.069000],[37,4,0.005000],[37,5,0.183000],[38,0,0.695000],[38,1,0.057000],[38,2,0.017000],[38,3,0.132000],[38,4,0.012000],[38,5,0.085000],[39,0,0.084000],[39,1,0.220000],[39,2,0.000000],[39,3,0.122000],[39,4,0.061000],[39,5,0.510000],[40,0,0.049000],[40,1,0.368000],[40,2,0.280000],[40,3,0.074000],[40,4,0.084000],[40,5,0.141000],[41,0,0.048000],[41,1,0.266000],[41,2,0.311000],[41,3,0.051000],[41,4,0.059000],[41,5,0.261000],[42,0,0.097000],[42,1,0.114000],[42,2,0.181000],[42,3,0.195000],[42,4,0.089000],[42,5,0.321000],[43,0,0.008000],[43,1,0.050000],[43,2,0.032000],[43,3,0.002000],[43,4,0.635000],[43,5,0.271000],[44,0,0.173000],[44,1,0.216000],[44,2,0.175000],[44,3,0.138000],[44,4,0.154000],[44,5,0.142000],[45,0,0.084000],[45,1,0.314000],[45,2,0.150000],[45,3,0.173000],[45,4,0.060000],[45,5,0.216000],[46,0,0.108000],[46,1,0.335000],[46,2,0.291000],[46,3,0.131000],[46,4,0.037000],[46,5,0.095000],[47,0,0.159000],[47,1,0.203000],[47,2,0.194000],[47,3,0.113000],[47,4,0.000000],[47,5,0.329000],[48,0,0.089000],[48,1,0.240000],[48,2,0.219000],[48,3,0.157000],[48,4,0.013000],[48,5,0.278000],[49,0,0.201000],[49,1,0.232000],[49,2,0.163000],[49,3,0.068000],[49,4,0.059000],[49,5,0.274000],[50,0,0.073000],[50,1,0.311000],[50,2,0.235000],[50,3,0.106000],[50,4,0.109000],[50,5,0.164000],[51,0,0.026000],[51,1,0.385000],[51,2,0.169000],[51,3,0.136000],[51,4,0.102000],[51,5,0.180000],[52,0,0.267000],[52,1,0.068000],[52,2,0.055000],[52,3,0.147000],[52,4,0.000000],[52,5,0.460000],[53,0,0.051000],[53,1,0.260000],[53,2,0.332000],[53,3,0.141000],[53,4,0.091000],[53,5,0.121000],[54,0,0.091000],[54,1,0.141000],[54,2,0.238000],[54,3,0.068000],[54,4,0.063000],[54,5,0.396000],[55,0,0.076000],[55,1,0.231000],[55,2,0.192000],[55,3,0.144000],[55,4,0.062000],[55,5,0.292000],[56,0,0.143000],[56,1,0.186000],[56,2,0.095000],[56,3,0.045000],[56,4,0.139000],[56,5,0.388000],[57,0,0.168000],[57,1,0.213000],[57,2,0.188000],[57,3,0.069000],[57,4,0.000000],[57,5,0.360000],[58,0,0.062000],[58,1,0.317000],[58,2,0.067000],[58,3,0.096000],[58,4,0.201000],[58,5,0.254000],[59,0,0.061000],[59,1,0.232000],[59,2,0.316000],[59,3,0.170000],[59,4,0.041000],[59,5,0.178000],[60,0,0.162000],[60,1,0.278000],[60,2,0.129000],[60,3,0.046000],[60,4,0.082000],[60,5,0.300000],[61,0,0.206000],[61,1,0.168000],[61,2,0.272000],[61,3,0.118000],[61,4,0.000000],[61,5,0.233000],[62,0,0.066000],[62,1,0.328000],[62,2,0.225000],[62,3,0.120000],[62,4,0.026000],[62,5,0.232000],[63,0,0.234000],[63,1,0.374000],[63,2,0.043000],[63,3,0.125000],[63,4,0.058000],[63,5,0.162000],[64,0,0.453000],[64,1,0.013000],[64,2,0.048000],[64,3,0.247000],[64,4,0.088000],[64,5,0.149000],[65,0,0.157000],[65,1,0.081000],[65,2,0.224000],[65,3,0.141000],[65,4,0.159000],[65,5,0.235000],[66,0,0.122000],[66,1,0.199000],[66,2,0.015000],[66,3,0.074000],[66,4,0.000000],[66,5,0.587000],[67,0,0.126000],[67,1,0.298000],[67,2,0.255000],[67,3,0.087000],[67,4,0.001000],[67,5,0.230000],[68,0,0.037000],[68,1,0.497000],[68,2,0.285000],[68,3,0.049000],[68,4,0.014000],[68,5,0.114000],[69,0,0.046000],[69,1,0.410000],[69,2,0.277000],[69,3,0.091000],[69,4,0.055000],[69,5,0.119000],[70,0,0.062000],[70,1,0.396000],[70,2,0.202000],[70,3,0.041000],[70,4,0.033000],[70,5,0.263000],[71,0,0.047000],[71,1,0.296000],[71,2,0.300000],[71,3,0.193000],[71,4,0.007000],[71,5,0.153000],[72,0,0.603000],[72,1,0.082000],[72,2,0.003000],[72,3,0.135000],[72,4,0.059000],[72,5,0.115000],[73,0,0.176000],[73,1,0.195000],[73,2,0.178000],[73,3,0.031000],[73,4,0.085000],[73,5,0.332000],[74,0,0.100000],[74,1,0.036000],[74,2,0.039000],[74,3,0.312000],[74,4,0.113000],[74,5,0.396000],[75,0,0.077000],[75,1,0.391000],[75,2,0.317000],[75,3,0.107000],[75,4,0.047000],[75,5,0.059000],[76,0,0.067000],[76,1,0.169000],[76,2,0.185000],[76,3,0.109000],[76,4,0.146000],[76,5,0.320000],[77,0,0.140000],[77,1,0.224000],[77,2,0.317000],[77,3,0.105000],[77,4,0.031000],[77,5,0.180000],[78,0,0.158000],[78,1,0.242000],[78,2,0.112000],[78,3,0.162000],[78,4,0.013000],[78,5,0.309000],[79,0,0.024000],[79,1,0.334000],[79,2,0.392000],[79,3,0.059000],[79,4,0.035000],[79,5,0.153000],[80,0,0.109000],[80,1,0.342000],[80,2,0.271000],[80,3,0.007000],[80,4,0.116000],[80,5,0.151000],[81,0,0.127000],[81,1,0.162000],[81,2,0.269000],[81,3,0.081000],[81,4,0.087000],[81,5,0.271000],[82,0,0.009000],[82,1,0.221000],[82,2,0.378000],[82,3,0.204000],[82,4,0.053000],[82,5,0.133000],[83,0,0.104000],[83,1,0.121000],[83,2,0.149000],[83,3,0.091000],[83,4,0.067000],[83,5,0.465000],[84,0,0.146000],[84,1,0.097000],[84,2,0.086000],[84,3,0.177000],[84,4,0.132000],[84,5,0.360000],[85,0,0.110000],[85,1,0.204000],[85,2,0.032000],[85,3,0.129000],[85,4,0.126000],[85,5,0.395000],[86,0,0.036000],[86,1,0.349000],[86,2,0.323000],[86,3,0.060000],[86,4,0.031000],[86,5,0.199000],[87,0,0.146000],[87,1,0.146000],[87,2,0.132000],[87,3,0.196000],[87,4,0.134000],[87,5,0.244000],[88,0,0.056000],[88,1,0.050000],[88,2,0.030000],[88,3,0.514000],[88,4,0.003000],[88,5,0.344000],[89,0,0.033000],[89,1,0.222000],[89,2,0.161000],[89,3,0.098000],[89,4,0.199000],[89,5,0.285000],];

msig_data.esc_Ids = [];
for (var i=0; i < msig_data.Ids.length; i++) {
    msig_data.esc_Ids[i] = 'Key' + i;
}

function tooltip_text(format, obj) {
    var tooltip = [];
    for (var t in format.format) {
        tooltip.push(utils.text_format(format.format[t], obj));
    }
    return tooltip;
};

function alt_data(sig_id) {
    
    var data = msig_data.dataset_alt[sig_id];

    var obj = {};
    obj['ca'] = data[1][0];
    obj['cg'] = data[1][2];
    obj['ct'] = data[1][3];
    obj['ta'] = data[3][0];
    obj['tc'] = data[3][1];
    obj['tg'] = data[3][2];
    
    var tooltip = tooltip_text(msig_data.tooltip_format['alt'], obj);
    
    return {
        data: data, 
        tooltip: tooltip, 
    };
};

function ref_data(sig_id, label) {
    
    var data = msig_data.dataset_ref[sig_id][Number(label.replace('ref', ''))];
    
    var obj = {};
    obj['a'] = data[0];
    obj['c'] = data[1];
    obj['g'] = data[2];
    obj['t'] = data[3];

    var tooltip = tooltip_text(msig_data.tooltip_format[label], obj);
    
    return {
        data: data, 
        tooltip: tooltip, 
    };
};

function strand_data(sig_id) {

    var data = msig_data.dataset_strand[sig_id];
    
    var obj = {};
    obj['plus'] = data[0];
    obj['minus'] = data[1];
    
    var tooltip = tooltip_text(msig_data.tooltip_format['strand'], obj);
    
    return {
        data: data, 
        tooltip: tooltip, 
    };
};
    
msig_data.get_dataset = function (sig_id, label) {
    
    var dataset = {};
    
    if (label == 'alt') {
        dataset = alt_data(sig_id);
    }
    else if(label.indexOf('ref') == 0) {
        dataset = ref_data(sig_id, label);
    }
    else if(label == 'strand') {
        dataset = strand_data(sig_id);
    }
    return dataset;
};

msig_data.get_bars_data = function () {
    
    var data = [];
    var keys = [];
    var tooltips = {};
    var sum_par_id = [];
    
    for (var i=0; i < msig_data.Ids.length; i++) {
        tooltips[msig_data.esc_Ids[i]] = [];
        sum_par_id[i] = 0;
    }
    
    // par func
    for (var f=0; f < msig_data.signatures.length; f++) {

        data[f] = [];
        keys[f] = [];

        // par ID
        for (var i=0; i < msig_data.Ids.length; i++) {
            
            var data_filt = msig_data.mutations.filter(function(item, index){
                if ((item[0] == i) && (item[1] == f)) return true;
            });
            
            //var sum = data_filt.length;
            var sum = 0;
            for (var s = 0; s < data_filt.length; s++) {
                sum += data_filt[s][2];
            }
            
            if (sum > 0) {
                data[f].push(sum);
                keys[f].push(msig_data.esc_Ids[i]);
                
                var obj = {
                    '#sum_mutaion_all': msig_data.mutations.length,
                    '#sum_item_value': sum,
                    'id': msig_data.Ids[i],
                    'sig': msig_data.signatures[f],
                };
                tooltips[msig_data.esc_Ids[i]].push(tooltip_text(msig_data.tooltip_format['mutation_partial'], obj));
                sum_par_id[i] += sum;
            }
        }
    }
    for (var i=0; i < msig_data.Ids.length; i++) {
        var obj = {
            '#sum_mutaion_all': msig_data.mutations.length,
            '#sum_item_value': sum_par_id[i],
            'id': msig_data.Ids[i],
        };
        
        title = tooltip_text(msig_data.tooltip_format['mutation_title'], obj);
        for (var t = 0; t < title.length; t++) {
            tooltips[msig_data.esc_Ids[i]].splice(t, 0, title[t]);
        }
    }
    
    return {data: data, key: keys, tooltip: tooltips};
};
})();
Object.freeze(msig_data);