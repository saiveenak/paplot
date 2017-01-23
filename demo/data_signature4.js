(function() {
sig_data = {};

sig_data.tooltip_format = {
    signature_title:{format:[[{label:'{sig}',type:'str',keys:['sig',],ext:''},],], keys: '{sig} '},
    signature_partial:{format:[[{label:'{route}',type:'str',keys:['route',],ext:''},{label:': ',type:'fix',keys:[],ext:''},{label:'{#sum_item_value}',type:'numeric',keys:['#sum_item_value',],ext:'6.2'},],], keys: '{#sum_item_value} {route} '},
    mutation_title:{format:[[{label:'{id}',type:'str',keys:['id',],ext:''},],], keys: '{id} '},
    mutation_partial:{format:[[{label:'{sig}',type:'str',keys:['sig',],ext:''},{label:': ',type:'fix',keys:[],ext:''},{label:'{#sum_item_value}',type:'numeric',keys:['#sum_item_value',],ext:'.2'},],], keys: '{#sum_item_value} {sig} '},
};

sig_data.signatures = ['signature 1','signature 2','signature 3','background ',];
sig_data.sig_colors = ['#66C2A5','#FC8D62','#8DA0CB','#B3B3B3',];
sig_data.dataset_sig = [[[0.026,0.0223,0.0024,0.0224,0.0231,0.0196,0.0015,0.0187,0.0134,0.0112,0,0.0114,0.0191,0.0167,0.0008,0.0265],[0.017,0.0095,0.0045,0.0181,0.0107,0.0087,0.0023,0.0155,0.0057,0.005,0.0009,0.0115,0.0096,0.0156,0.0015,0.0302],[0.0204,0.0088,0.0159,0.0202,0.0108,0.0082,0.0077,0.019,0.0114,0.008,0.0108,0.0117,0,0.0112,0.0034,0.0115],[0.0098,0.0074,0.0109,0.0153,0.0104,0.0117,0.0093,0.0175,0.0066,0.0049,0.0051,0.0111,0.0118,0.0073,0.0044,0.0184],[0.0214,0.0092,0.0137,0.0226,0.0106,0.0122,0.007,0.0128,0.0097,0.0054,0.0044,0.0086,0.0103,0.0075,0.004,0.0086],[0.0044,0.0004,0.0079,0.0047,0.0035,0.002,0.0056,0.0095,0.0042,0.0016,0.0071,0.0061,0.0058,0.0021,0.0082,0.0117],],[[0.0015,0.0001,0.0001,0.0004,0.0013,0.0009,0.0002,0.0006,0.0009,0.0003,0.0001,0.0002,0.027,0.0106,0.0015,0.0141],[0.0024,0.0007,0.0001,0.0021,0.0029,0.0006,0.0004,0.0033,0.0008,0.0004,0.0002,0.0014,0.1576,0.031,0.0056,0.1973],[0.0039,0.0014,0.0005,0.0019,0.0092,0.0023,0.0033,0.005,0.0042,0.0018,0.002,0.0026,0.2643,0.0516,0.0274,0.1349],[0.0011,0.0005,0.0004,0,0.0003,0.0004,0.0001,0.0001,0.0003,0.0001,0.0004,0.0001,0,0.0001,0.0001,0.0002],[0.0004,0.0002,0.0006,0.0004,0.0001,0.0004,0.0009,0.0005,0.0002,0.0002,0.0005,0,0.0001,0.0002,0.0001,0.0001],[0.0001,0.0001,0.0002,0.0001,0,0.0001,0.0001,0,0.0001,0.0002,0.001,0.0002,0.0002,0,0.0001,0.0004],],[[0.02,0.0153,0.0029,0.0103,0.0128,0.0049,0.0017,0.0091,0.0164,0.0071,0.0027,0.0099,0.0244,0.0169,0.0038,0.03],[0.0048,0.0055,0.0014,0.0058,0.0016,0.0016,0.0014,0.0056,0.0026,0.003,0,0.0019,0.0071,0.0123,0.0006,0.0167],[0.0222,0.0109,0.0723,0.0106,0.0189,0.0148,0.0403,0.0185,0.0159,0.0138,0.0449,0.0136,0.0343,0.0318,0.0349,0.032],[0.0082,0.0094,0.0069,0.0175,0.0019,0.0031,0.0019,0.0039,0.0013,0.0026,0.0018,0.0028,0.0229,0.0032,0.0032,0.0076],[0.0214,0.0071,0.0134,0.0186,0.0064,0.0061,0.0054,0.0067,0.0095,0.0055,0.0054,0.0128,0.0115,0.0097,0.0052,0.0132],[0.0057,0.0021,0,0.0037,0.002,0.0015,0.0025,0.0073,0.0007,0.0006,0.0016,0.0038,0.003,0.002,0.0032,0.01],],];
sig_data.dataset_sig_max = 0.2643;
sig_data.route_id = ['AA','AC','AG','AT','CA','CC','CG','CT','GA','GC','GG','GT','TA','TC','TG','TT',];
sig_data.substitution = [{name: 'C > A', color: '#1BBDEB', route: ['ApCpA','ApCpC','ApCpG','ApCpT','CpCpA','CpCpC','CpCpG','CpCpT','GpCpA','GpCpC','GpCpG','GpCpT','TpCpA','TpCpC','TpCpG','TpCpT',],},{name: 'C > G', color: '#211D1E', route: ['ApCpA','ApCpC','ApCpG','ApCpT','CpCpA','CpCpC','CpCpG','CpCpT','GpCpA','GpCpC','GpCpG','GpCpT','TpCpA','TpCpC','TpCpG','TpCpT',],},{name: 'C > T', color: '#E62623', route: ['ApCpA','ApCpC','ApCpG','ApCpT','CpCpA','CpCpC','CpCpG','CpCpT','GpCpA','GpCpC','GpCpG','GpCpT','TpCpA','TpCpC','TpCpG','TpCpT',],},{name: 'T > A', color: '#CFCFCF', route: ['ApTpA','ApTpC','ApTpG','ApTpT','CpTpA','CpTpC','CpTpG','CpTpT','GpTpA','GpTpC','GpTpG','GpTpT','TpTpA','TpTpC','TpTpG','TpTpT',],},{name: 'T > C', color: '#ACD577', route: ['ApTpA','ApTpC','ApTpG','ApTpT','CpTpA','CpTpC','CpTpG','CpTpT','GpTpA','GpTpC','GpTpG','GpTpT','TpTpA','TpTpC','TpTpG','TpTpT',],},{name: 'T > G', color: '#EDC7C4', route: ['ApTpA','ApTpC','ApTpG','ApTpT','CpTpA','CpTpC','CpTpG','CpTpT','GpTpA','GpTpC','GpTpG','GpTpT','TpTpA','TpTpC','TpTpG','TpTpT',],},];
sig_data.Ids = ['PD3851a','PD3890a','PD3904a','PD3905a','PD3945a','PD4005a','PD4006a','PD4085a','PD4086a','PD4088a','PD4103a','PD4107a','PD4109a','PD4115a','PD4116a','PD4120a','PD4192a','PD4194a','PD4198a','PD4199a','PD4248a',];

// [ID, signature, value]
sig_data.mutations = [[0,0,0.154300],[0,1,0.005100],[0,2,0.629200],[0,3,0.211200],[1,0,0.507500],[1,1,0.143100],[1,2,0.061800],[1,3,0.287400],[2,0,0.533300],[2,1,0.144400],[2,2,0.151200],[2,3,0.171000],[3,0,0.530300],[3,1,0.127400],[3,2,0.086300],[3,3,0.255800],[4,0,0.659600],[4,1,0.071500],[4,2,0.064900],[4,3,0.203800],[5,0,0.422100],[5,1,0.349300],[5,2,0.074100],[5,3,0.154300],[6,0,0.688900],[6,1,0.034500],[6,2,0.043800],[6,3,0.232600],[7,0,0.246200],[7,1,0.000000],[7,2,0.657800],[7,3,0.095800],[8,0,0.249100],[8,1,0.265500],[8,2,0.301400],[8,3,0.183900],[9,0,0.229000],[9,1,0.067500],[9,2,0.703300],[9,3,0.000000],[10,0,0.108700],[10,1,0.180800],[10,2,0.621900],[10,3,0.088400],[11,0,0.536200],[11,1,0.090500],[11,2,0.111500],[11,3,0.261600],[12,0,0.335900],[12,1,0.176200],[12,2,0.389700],[12,3,0.098000],[13,0,0.597200],[13,1,0.041700],[13,2,0.128200],[13,3,0.232700],[14,0,0.631200],[14,1,0.124300],[14,2,0.003000],[14,3,0.241200],[15,0,0.000400],[15,1,0.952500],[15,2,0.034100],[15,3,0.012800],[16,0,0.176200],[16,1,0.159700],[16,2,0.294400],[16,3,0.369500],[17,0,0.000900],[17,1,0.159600],[17,2,0.653200],[17,3,0.186100],[18,0,0.112500],[18,1,0.110400],[18,2,0.575000],[18,3,0.201900],[19,0,0.030200],[19,1,0.688900],[19,2,0.230900],[19,3,0.049800],[20,0,0.263400],[20,1,0.061200],[20,2,0.441000],[20,3,0.234300],];
sig_data.mutation_count = [4001,7174,5804,5712,14470,8572,9542,6290,3656,2597,5718,12025,11346,11099,8837,71019,5435,2170,5187,7108,3550,];

sig_data.esc_Ids = [];
for (var i=0; i < sig_data.Ids.length; i++) {
    sig_data.esc_Ids[i] = 'Key' + i;
}

function tooltip_text(format, obj) {
    var tooltip = [];
    for (var t in format.format) {
        tooltip.push(utils.text_format(format.format[t], obj));
    }
    return tooltip;
};

sig_data.get_data_par_signature = function (signature_id) {
    
    var tooltips = [];

    // par change
    for (var i=0; i < sig_data.substitution.length; i++) {
        
        var sum = 0;
        
        var obj = {
            'sig': sig_data.substitution[i].name,
        };
        tooltips[i] = [];
        segment_index = -1;
        for (var j=0; j < sig_data.dataset_sig[signature_id][i].length; j++) {
            if (j%16 == 0) {
                segment_index += 1;
                tooltips[i][segment_index] = [];
            }
            obj['route'] = sig_data.substitution[i].route[j];
            obj['#sum_item_value'] = sig_data.dataset_sig[signature_id][i][j];
            
            tooltips[i][segment_index].push(tooltip_text(sig_data.tooltip_format['signature_partial'], obj));
            sum += sig_data.dataset_sig[signature_id][i][j];
        }
        
        obj['#sum_group_value'] = sum;
        
        title = tooltip_text(sig_data.tooltip_format['signature_title'], obj);
        for (var s = 0; s < tooltips[i].length; s++) {
            for (var t = 0; t < title.length; t++) {
                tooltips[i][s].splice(t, 0, title[t]);
            }
        }
    }
    
    return {data: sig_data.dataset_sig[signature_id], tooltip: tooltips};
};

sig_data.get_bars_data = function (rate) {
    
    var data = [];
    var keys = [];
    var tooltips = {};
    var sum_par_id = [];
    for (var i=0; i < sig_data.Ids.length; i++) {
        tooltips[sig_data.esc_Ids[i]] = [];
        sum_par_id[i] = 0;
    }
    
    // par func
    for (var f=0; f < sig_data.signatures.length; f++) {

        data[f] = [];
        keys[f] = [];

        // par ID
        for (var i=0; i < sig_data.Ids.length; i++) {
            
            var data_filt = sig_data.mutations.filter(function(item, index){
                if ((item[0] == i) && (item[1] == f)) return true;
            });
            
            //var sum = data_filt.length;
            var sum = 0;
            for (var s = 0; s < data_filt.length; s++) {
                sum += data_filt[s][2];
            }
            
            var mutation_count = 1;
            if (rate == false) {
                if (sig_data.mutation_count.length > 0) mutation_count = sig_data.mutation_count[i];
            }
            
            if (sum > 0) {
                sum = sum*mutation_count;
            
                data[f].push(sum);
                keys[f].push(sig_data.esc_Ids[i]);
                
                var obj = {
                    '#sum_mutaion_all': sig_data.mutations.length,
                    '#sum_item_value': sum,
                    'id': sig_data.Ids[i],
                    'sig': sig_data.signatures[f],
                };
                tooltips[sig_data.esc_Ids[i]].push(tooltip_text(sig_data.tooltip_format["mutation_partial"], obj));
                sum_par_id[i] += sum;
            }
        }
    }
    for (var i=0; i < sig_data.Ids.length; i++) {
        var obj = {
            '#sum_mutaion_all': sig_data.mutations.length,
            '#sum_item_value': sum_par_id[i],
            'id': sig_data.Ids[i],
        };
        
        title = tooltip_text(sig_data.tooltip_format["mutation_title"], obj);
        for (var t = 0; t < title.length; t++) {
            tooltips[sig_data.esc_Ids[i]].splice(t, 0, title[t]);
        }
    }
    
    return {data: data, key: keys, tooltip: tooltips};
};
})();
Object.freeze(sig_data);
