// https://www.terraform.io/docs/providers/oci/r/data_oci_dataflow_invoke_run.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "application_id": {
        "type": "string",
        "computed": true
      },
      "archive_uri": {
        "type": "string",
        "computed": true
      },
      "arguments": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "asynchronous": {
        "type": "bool",
        "computed": true
      },
      "class_name": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "configuration": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "data_read_in_bytes": {
        "type": "string",
        "computed": true
      },
      "data_written_in_bytes": {
        "type": "string",
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "driver_shape": {
        "type": "string",
        "computed": true
      },
      "executor_shape": {
        "type": "string",
        "computed": true
      },
      "file_uri": {
        "type": "string",
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "language": {
        "type": "string",
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "logs_bucket_uri": {
        "type": "string",
        "computed": true
      },
      "num_executors": {
        "type": "number",
        "computed": true
      },
      "opc_request_id": {
        "type": "string",
        "computed": true
      },
      "owner_principal_id": {
        "type": "string",
        "computed": true
      },
      "owner_user_name": {
        "type": "string",
        "computed": true
      },
      "parameters": {
        "type": [
          "list",
          [
            "object",
            {
              "name": "string",
              "value": "string"
            }
          ]
        ],
        "computed": true
      },
      "private_endpoint_dns_zones": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "private_endpoint_id": {
        "type": "string",
        "computed": true
      },
      "private_endpoint_max_host_count": {
        "type": "number",
        "computed": true
      },
      "private_endpoint_nsg_ids": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "private_endpoint_subnet_id": {
        "type": "string",
        "computed": true
      },
      "run_duration_in_milliseconds": {
        "type": "string",
        "computed": true
      },
      "run_id": {
        "type": "string",
        "required": true
      },
      "spark_version": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_updated": {
        "type": "string",
        "computed": true
      },
      "total_ocpu": {
        "type": "number",
        "computed": true
      },
      "warehouse_bucket_uri": {
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
import { StringMap } from "cdktf";
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciDataflowInvokeRunConfig extends TerraformMetaArguments {
  readonly runId: string;
}
export class DataOciDataflowInvokeRunParameters extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}

// Resource

export class DataOciDataflowInvokeRun extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDataflowInvokeRunConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dataflow_invoke_run',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._runId = config.runId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: true, optional: false, required: true
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // archive_uri - computed: true, optional: false, required: true
  public get archiveUri() {
    return this.getStringAttribute('archive_uri');
  }

  // arguments - computed: true, optional: false, required: true
  public get arguments() {
    return this.getListAttribute('arguments');
  }

  // asynchronous - computed: true, optional: false, required: true
  public get asynchronous() {
    return this.getBooleanAttribute('asynchronous');
  }

  // class_name - computed: true, optional: false, required: true
  public get className() {
    return this.getStringAttribute('class_name');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // configuration - computed: true, optional: false, required: true
  public configuration(key: string): string {
    return new StringMap(this, 'configuration').lookup(key);
  }

  // data_read_in_bytes - computed: true, optional: false, required: true
  public get dataReadInBytes() {
    return this.getStringAttribute('data_read_in_bytes');
  }

  // data_written_in_bytes - computed: true, optional: false, required: true
  public get dataWrittenInBytes() {
    return this.getStringAttribute('data_written_in_bytes');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // driver_shape - computed: true, optional: false, required: true
  public get driverShape() {
    return this.getStringAttribute('driver_shape');
  }

  // executor_shape - computed: true, optional: false, required: true
  public get executorShape() {
    return this.getStringAttribute('executor_shape');
  }

  // file_uri - computed: true, optional: false, required: true
  public get fileUri() {
    return this.getStringAttribute('file_uri');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // language - computed: true, optional: false, required: true
  public get language() {
    return this.getStringAttribute('language');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // logs_bucket_uri - computed: true, optional: false, required: true
  public get logsBucketUri() {
    return this.getStringAttribute('logs_bucket_uri');
  }

  // num_executors - computed: true, optional: false, required: true
  public get numExecutors() {
    return this.getNumberAttribute('num_executors');
  }

  // opc_request_id - computed: true, optional: false, required: true
  public get opcRequestId() {
    return this.getStringAttribute('opc_request_id');
  }

  // owner_principal_id - computed: true, optional: false, required: true
  public get ownerPrincipalId() {
    return this.getStringAttribute('owner_principal_id');
  }

  // owner_user_name - computed: true, optional: false, required: true
  public get ownerUserName() {
    return this.getStringAttribute('owner_user_name');
  }

  // parameters - computed: true, optional: false, required: true
  public parameters(index: string) {
    return new DataOciDataflowInvokeRunParameters(this, 'parameters', index);
  }

  // private_endpoint_dns_zones - computed: true, optional: false, required: true
  public get privateEndpointDnsZones() {
    return this.getListAttribute('private_endpoint_dns_zones');
  }

  // private_endpoint_id - computed: true, optional: false, required: true
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
  }

  // private_endpoint_max_host_count - computed: true, optional: false, required: true
  public get privateEndpointMaxHostCount() {
    return this.getNumberAttribute('private_endpoint_max_host_count');
  }

  // private_endpoint_nsg_ids - computed: true, optional: false, required: true
  public get privateEndpointNsgIds() {
    return this.getListAttribute('private_endpoint_nsg_ids');
  }

  // private_endpoint_subnet_id - computed: true, optional: false, required: true
  public get privateEndpointSubnetId() {
    return this.getStringAttribute('private_endpoint_subnet_id');
  }

  // run_duration_in_milliseconds - computed: true, optional: false, required: true
  public get runDurationInMilliseconds() {
    return this.getStringAttribute('run_duration_in_milliseconds');
  }

  // run_id - computed: false, optional: false, required: true
  private _runId: string;
  public get runId() {
    return this._runId;
  }
  public set runId(value: string) {
    this._runId = value;
  }

  // spark_version - computed: true, optional: false, required: true
  public get sparkVersion() {
    return this.getStringAttribute('spark_version');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // total_ocpu - computed: true, optional: false, required: true
  public get totalOcpu() {
    return this.getNumberAttribute('total_ocpu');
  }

  // warehouse_bucket_uri - computed: true, optional: false, required: true
  public get warehouseBucketUri() {
    return this.getStringAttribute('warehouse_bucket_uri');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      run_id: this._runId,
    };
  }
}
