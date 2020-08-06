// https://www.terraform.io/docs/providers/oci/r/data_oci_core_drg_attachments.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "drg_attachments": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "display_name": "string",
              "drg_id": "string",
              "id": "string",
              "route_table_id": "string",
              "state": "string",
              "time_created": "string",
              "vcn_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "drg_id": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "vcn_id": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "regex": {
              "type": "bool",
              "optional": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciCoreDrgAttachmentsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly drgId?: string;
  readonly vcnId?: string;
  /** filter block */
  readonly filter?: DataOciCoreDrgAttachmentsFilter[];
}
export class DataOciCoreDrgAttachmentsDrgAttachments extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // drg_id - computed: true, optional: false, required: true
  public get drgId() {
    return this.getStringAttribute('drg_id');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // route_table_id - computed: true, optional: false, required: true
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // vcn_id - computed: true, optional: false, required: true
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
}
export interface DataOciCoreDrgAttachmentsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreDrgAttachments extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreDrgAttachmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_drg_attachments',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._drgId = config.drgId;
    this._vcnId = config.vcnId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // drg_attachments - computed: true, optional: false, required: true
  public drgAttachments(index: string) {
    return new DataOciCoreDrgAttachmentsDrgAttachments(this, 'drg_attachments', index);
  }

  // drg_id - computed: false, optional: true, required: false
  private _drgId?: string;
  public get drgId() {
    return this._drgId;
  }
  public set drgId(value: string | undefined) {
    this._drgId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // vcn_id - computed: false, optional: true, required: false
  private _vcnId?: string;
  public get vcnId() {
    return this._vcnId;
  }
  public set vcnId(value: string | undefined) {
    this._vcnId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreDrgAttachmentsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreDrgAttachmentsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      drg_id: this._drgId,
      vcn_id: this._vcnId,
      filter: this._filter,
    };
  }
}
