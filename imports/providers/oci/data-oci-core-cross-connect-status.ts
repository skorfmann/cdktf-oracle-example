// https://www.terraform.io/docs/providers/oci/r/data_oci_core_cross_connect_status.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "cross_connect_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "interface_state": {
        "type": "string",
        "computed": true
      },
      "light_level_ind_bm": {
        "type": "number",
        "computed": true
      },
      "light_level_indicator": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataOciCoreCrossConnectStatusConfig extends TerraformMetaArguments {
  readonly crossConnectId: string;
}

// Resource

export class DataOciCoreCrossConnectStatus extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreCrossConnectStatusConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_cross_connect_status',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._crossConnectId = config.crossConnectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cross_connect_id - computed: false, optional: false, required: true
  private _crossConnectId: string;
  public get crossConnectId() {
    return this._crossConnectId;
  }
  public set crossConnectId(value: string) {
    this._crossConnectId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // interface_state - computed: true, optional: false, required: true
  public get interfaceState() {
    return this.getStringAttribute('interface_state');
  }

  // light_level_ind_bm - computed: true, optional: false, required: true
  public get lightLevelIndBm() {
    return this.getNumberAttribute('light_level_ind_bm');
  }

  // light_level_indicator - computed: true, optional: false, required: true
  public get lightLevelIndicator() {
    return this.getStringAttribute('light_level_indicator');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cross_connect_id: this._crossConnectId,
    };
  }
}
