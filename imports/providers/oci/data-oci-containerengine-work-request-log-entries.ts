// https://www.terraform.io/docs/providers/oci/r/data_oci_containerengine_work_request_log_entries.html
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
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "work_request_id": {
        "type": "string",
        "required": true
      },
      "work_request_log_entries": {
        "type": [
          "list",
          [
            "object",
            {
              "message": "string",
              "timestamp": "string"
            }
          ]
        ],
        "computed": true
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

export interface DataOciContainerengineWorkRequestLogEntriesConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly workRequestId: string;
  /** filter block */
  readonly filter?: DataOciContainerengineWorkRequestLogEntriesFilter[];
}
export class DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntries extends ComplexComputedList {

  // message - computed: true, optional: false, required: true
  public get message() {
    return this.getStringAttribute('message');
  }

  // timestamp - computed: true, optional: false, required: true
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}
export interface DataOciContainerengineWorkRequestLogEntriesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciContainerengineWorkRequestLogEntries extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciContainerengineWorkRequestLogEntriesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_containerengine_work_request_log_entries',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._workRequestId = config.workRequestId;
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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // work_request_id - computed: false, optional: false, required: true
  private _workRequestId: string;
  public get workRequestId() {
    return this._workRequestId;
  }
  public set workRequestId(value: string) {
    this._workRequestId = value;
  }

  // work_request_log_entries - computed: true, optional: false, required: true
  public workRequestLogEntries(index: string) {
    return new DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntries(this, 'work_request_log_entries', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciContainerengineWorkRequestLogEntriesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciContainerengineWorkRequestLogEntriesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      work_request_id: this._workRequestId,
      filter: this._filter,
    };
  }
}
