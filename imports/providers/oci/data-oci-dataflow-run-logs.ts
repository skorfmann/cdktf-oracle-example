// https://www.terraform.io/docs/providers/oci/r/data_oci_dataflow_run_logs.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "run_id": {
        "type": "string",
        "required": true
      },
      "run_logs": {
        "type": [
          "list",
          [
            "object",
            {
              "name": "string",
              "run_id": "string",
              "size_in_bytes": "string",
              "source": "string",
              "time_created": "string",
              "type": "string"
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

export interface DataOciDataflowRunLogsConfig extends TerraformMetaArguments {
  readonly runId: string;
  /** filter block */
  readonly filter?: DataOciDataflowRunLogsFilter[];
}
export class DataOciDataflowRunLogsRunLogs extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // run_id - computed: true, optional: false, required: true
  public get runId() {
    return this.getStringAttribute('run_id');
  }

  // size_in_bytes - computed: true, optional: false, required: true
  public get sizeInBytes() {
    return this.getStringAttribute('size_in_bytes');
  }

  // source - computed: true, optional: false, required: true
  public get source() {
    return this.getStringAttribute('source');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataOciDataflowRunLogsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDataflowRunLogs extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDataflowRunLogsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dataflow_run_logs',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._runId = config.runId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // run_id - computed: false, optional: false, required: true
  private _runId: string;
  public get runId() {
    return this._runId;
  }
  public set runId(value: string) {
    this._runId = value;
  }

  // run_logs - computed: true, optional: false, required: true
  public runLogs(index: string) {
    return new DataOciDataflowRunLogsRunLogs(this, 'run_logs', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDataflowRunLogsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDataflowRunLogsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      run_id: this._runId,
      filter: this._filter,
    };
  }
}
