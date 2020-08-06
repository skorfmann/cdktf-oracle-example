// https://www.terraform.io/docs/providers/oci/r/data_oci_containerengine_work_requests.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "cluster_id": {
        "type": "string",
        "optional": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "resource_id": {
        "type": "string",
        "optional": true
      },
      "resource_type": {
        "type": "string",
        "optional": true
      },
      "status": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "work_requests": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "id": "string",
              "operation_type": "string",
              "resources": [
                "list",
                [
                  "object",
                  {
                    "action_type": "string",
                    "entity_type": "string",
                    "entity_uri": "string",
                    "identifier": "string"
                  }
                ]
              ],
              "status": "string",
              "time_accepted": "string",
              "time_finished": "string",
              "time_started": "string"
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

export interface DataOciContainerengineWorkRequestsConfig extends TerraformMetaArguments {
  readonly clusterId?: string;
  readonly compartmentId: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
  readonly status?: string[];
  /** filter block */
  readonly filter?: DataOciContainerengineWorkRequestsFilter[];
}
export class DataOciContainerengineWorkRequestsWorkRequestsResources extends ComplexComputedList {

  // action_type - computed: true, optional: false, required: true
  public get actionType() {
    return this.getStringAttribute('action_type');
  }

  // entity_type - computed: true, optional: false, required: true
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }

  // entity_uri - computed: true, optional: false, required: true
  public get entityUri() {
    return this.getStringAttribute('entity_uri');
  }

  // identifier - computed: true, optional: false, required: true
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
}
export class DataOciContainerengineWorkRequestsWorkRequests extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // operation_type - computed: true, optional: false, required: true
  public get operationType() {
    return this.getStringAttribute('operation_type');
  }

  // resources - computed: true, optional: false, required: true
  public get resources() {
    return 'not implemented' as any;
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_accepted - computed: true, optional: false, required: true
  public get timeAccepted() {
    return this.getStringAttribute('time_accepted');
  }

  // time_finished - computed: true, optional: false, required: true
  public get timeFinished() {
    return this.getStringAttribute('time_finished');
  }

  // time_started - computed: true, optional: false, required: true
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }
}
export interface DataOciContainerengineWorkRequestsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciContainerengineWorkRequests extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciContainerengineWorkRequestsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_containerengine_work_requests',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterId = config.clusterId;
    this._compartmentId = config.compartmentId;
    this._resourceId = config.resourceId;
    this._resourceType = config.resourceType;
    this._status = config.status;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string;
  public get clusterId() {
    return this._clusterId;
  }
  public set clusterId(value: string | undefined) {
    this._clusterId = value;
  }

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

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string;
  public get resourceId() {
    return this._resourceId;
  }
  public set resourceId(value: string | undefined) {
    this._resourceId = value;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string;
  public get resourceType() {
    return this._resourceType;
  }
  public set resourceType(value: string | undefined) {
    this._resourceType = value;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string[];
  public get status() {
    return this._status;
  }
  public set status(value: string[] | undefined) {
    this._status = value;
  }

  // work_requests - computed: true, optional: false, required: true
  public workRequests(index: string) {
    return new DataOciContainerengineWorkRequestsWorkRequests(this, 'work_requests', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciContainerengineWorkRequestsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciContainerengineWorkRequestsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: this._clusterId,
      compartment_id: this._compartmentId,
      resource_id: this._resourceId,
      resource_type: this._resourceType,
      status: this._status,
      filter: this._filter,
    };
  }
}
